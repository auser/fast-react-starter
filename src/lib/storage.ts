import * as store from 'store';

let ls =
  typeof localStorage === 'undefined'
    ? {
        getItem: function(key: string) {
          return this[key];
        },
        setItem: function(key: string, value: any) {
          this[key] = value;
        },
        removeItem: function(key: string) {
          delete this[key];
        }
      }
    : localStorage;
const AUTH_TOKEN_KEY = 'auth0IdToken';

interface IProfile {
  clientID: string;
  email: string;
  name: string;
  nickname: string;
  picture: string;
  user_id: string;
}

class Storage {
  constructor() {}

  get(key: string): any {
    let value = ls.getItem(key);
    value = value && JSON.parse(value);
    return value;
  }

  set(key: string, value: any) {
    return ls.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    return ls.removeItem(key);
  }

  getUserId() {
    return this.profile.user_id;
  }

  get profile() {
    const profileJson: IProfile = this.get('profile');
    return profileJson;
  }

  authToken() {
    return this.get(AUTH_TOKEN_KEY);
  }

  saveToken(value: string) {
    if (value) {
      return this.set(AUTH_TOKEN_KEY, value);
    } else {
      this.removeToken();
    }
  }

  removeToken() {
    return this.remove(AUTH_TOKEN_KEY);
  }
}

export default new Storage();
