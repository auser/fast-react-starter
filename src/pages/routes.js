import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Login from './Login';
import Logout from './Logout';

export const Routes = props => {
  return (
    <Switch className={props.className}>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default styled(Routes)`
width: 100%;
`;
