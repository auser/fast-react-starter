import * as auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import Storage from './storage';

declare var process: any;
// import logo from '../assets/images/logos/newline-header-logo@2x.png';

const domain = process.env.AUTH0_DOMAIN || 'http://newline.co';
const clientID = process.env.AUTH0_CLIENT_ID;
const callbackURL =
  process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback';

const auth0Opts = {
  clientID: clientID,
  domain: domain,
  responseType: 'token id_token',
  audience: `https://${domain}/userinfo`,
  scope: 'openid'
};

interface UserProfile {
  email: string;
  name: string;
}

export class Auth {
  private lock: any;
  private auth0IdToken: any = Storage.authToken();
  private accessToken: string | null;
  private auth0: any;
  private profile: any;
  private _onAuthenticated: Function[] = [];

  constructor() {
    this.auth0 = new auth0.WebAuth(auth0Opts);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthenticated(authResult: any): Promise<UserProfile> {
    return new Promise((resolve, reject) => {
      const accessToken = (this.accessToken = authResult.accessToken);
      this.auth0IdToken = authResult.idToken;
      this.profile = authResult.profile;
      Storage.saveToken(this.auth0IdToken);

      this.lock.getUserInfo(accessToken, (error: Error, profile: any) => {
        if (error) {
          // Handle error
          this.accessToken = null;
          this.profile = null;
          reject(error);
        } else {
          this.profile = profile;
          localStorage.setItem('profile', JSON.stringify(profile));
          resolve(profile);
        }
      });
    });
  }

  getUserProfile(authResult: any) {
    return new Promise((resolve: Function, reject: Function) => {
      this.auth0IdToken = authResult.idToken;
      Storage.saveToken(this.auth0IdToken);

      this.lock.getProfile(authResult.idToken, (error: Error, profile: any) => {
        if (error) {
          console.error('Getting profile error', error);
          reject(error);
        } else {
          this.profile = profile;
          Storage.set('profile', profile);
          resolve(profile);
        }
      });
    });
  }

  onAuthenticated(fn: Function) {
    if (this.isAuthenticated()) {
      fn(Object.assign({}, this.profile, {token: this.auth0IdToken}));
    } else {
      if (!this._onAuthenticated) {
        this._onAuthenticated = [];
      }

      this._onAuthenticated.push(fn);
    }
  }

  offAuthenticated(fn: Function) {
    if (this._onAuthenticated.indexOf(fn)) {
      this._onAuthenticated.splice(this._onAuthenticated.indexOf(fn), 1);
    }
  }

  lockLogin() {
    this.lock = new Auth0Lock(clientID, domain, {
      allowSignUp: false,
      auth: {
        responseType: 'token',
        params: {scope: 'openid email'},
        redirect: false
        // redirect: true,
        // redirectUrl: `${process.env.SITE_URL}/lessons`
      },
      languageDictionary: {
        title: 'Newline'
      },
      theme: {
        // logo,
        primaryColor: '#32B941'
      }
    });
    return this.lock;
  }

  lockSignup() {
    this.lock = new Auth0Lock(clientID, domain, {
      allowLogin: true,
      initialScreen: 'signUp',
      auth: {
        responseType: 'token',
        params: {scope: 'openid email'},
        redirect: false
        // redirectUrl: `${process.env.SITE_URL}/subscribe`
      },
      languageDictionary: {
        title: 'Newline'
      },
      theme: {
        // logo,
        primaryColor: '#32B941'
      }
    });
    return this.lock;
  }

  showLock(opts: any) {
    return this.lock.show(opts);
  }

  hideLogin() {
    return this.lock.hide();
  }

  changePassword(email: string) {
    return new Promise((resolve: Function, reject: Function) => {
      this.auth0.changePassword(
        {
          connection: 'Username-Password-Authentication',
          email
        },
        (err: Error, message: string) => {
          if (err) {
            console.error('Error occurred', err);
            reject(err);
          } else {
            resolve(message);
          }
        }
      );
    });
  }

  /**
   * Signup, login, and register with graphcool
   */
  signupLoginAndSave(fields: any) {}

  logout() {
    Storage.removeToken();

    Storage.remove('profile');
    localStorage.removeItem('profile');
  }
  isAuthenticated() {
    return !!Storage.authToken();
  }
}

export default new Auth();
