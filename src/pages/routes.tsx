import * as React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Login from './Login';
import Logout from './Logout';

import Courses from './Courses';

interface Props {
  className: string;
}

export const Routes = (props: Props) => {
  return (
    <div className={props.className}>
      <Switch>
        <Route path="/courses" component={Courses} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default styled(Routes)`
width: 100%;
height: 100%;
`;
