import * as React from 'react';

import presets from 'utils/presets';
import styled from 'styled-components';
import auth from 'lib/auth';
import Storage from 'lib/storage';

import {compose} from 'recompose';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import Wrapper from 'components/Wrapper';

interface Props {
  className: string;
  signinMutation: (data: any) => any;
  history: any;
}

export class Login extends React.Component<Props> {
  lock: any;

  componentDidMount() {
    const lock = auth.lockLogin();

    lock.on('authenticated', this.onAuthorized.bind(this));
    lock.on('hide', this.redirect.bind(this, true));
    this.lock = lock;

    auth.isAuthenticated() ? this.redirect() : lock.show();
  }

  handleToken({data}: any) {
    Storage.saveToken(data.signinUser.token);
    this.redirect();
  }

  redirect() {
    this.lock.hide();
    this.props.history.replace('/');
  }

  async onAuthorized(data: any) {
    try {
      const profile = await auth.handleAuthenticated(data);
      const props = await this.props.signinMutation({
        variables: {token: data.idToken}
      });
      this.handleToken(props);
    } catch (e) {
      console.log('error ->', e);
    }
  }

  render() {
    const {className} = this.props;

    return (
      <Wrapper id="login" className={className}>
        <span>Loading...</span>
      </Wrapper>
    );
  }
}

const signinMutation = gql`
  mutation signinUser($token: String!) {
    signinUser(auth0: {idToken: $token}) {
      token
    }
  }
`;

export default compose(
  graphql(signinMutation, {name: 'signinMutation'})
)(styled(Login)`
background: ${presets.brandLighter};
display: flex;
height: 100%;
flex: 1;
justify-content: center;
align-items: center;
span {
  color: #fff;
}
`);
