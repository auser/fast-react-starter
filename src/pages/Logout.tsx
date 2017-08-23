import * as React from 'react';
import {Redirect} from 'react-router-dom';

import styled from 'styled-components';

import auth from 'lib/auth';

interface Props {
  className: string;
  history: any;
}

export const Logout: React.SFC<Props> = ({className}) => {
  auth.logout();
  return <Redirect to="/" />;
};

export default styled(Logout)`
`;
