import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import {compose} from 'recompose';

import withHeader from 'hocs/withHeader';
import Masthead from 'components/Masthead';
import Cards from 'components/Cards/Cards';
import Card from 'components/Cards/Card';

export const Home = props => {
  return (
    <div className={props.className}>
      <Helmet title={'Home'} />
      <Masthead />
      <Cards>
        <Card>
          <h2>Learn you some bitcoin for great good!</h2>
          <p>Learn the Blockchain</p>
        </Card>
        <Card>
          <h2>Learn you some bitcoin for great good!</h2>
          <p>Learn the Blockchain</p>
        </Card>
        <Card>
          <h2>Learn you some bitcoin for great good!</h2>
          <p>Learn the Blockchain</p>
        </Card>
        <Card>
          <h2>Learn you some bitcoin for great good!</h2>
          <p>Learn the Blockchain</p>
        </Card>
        <Card>
          <h2>Learn you some bitcoin for great good!</h2>
          <p>Learn the Blockchain</p>
        </Card>
        <Card>
          <h2>Learn you some bitcoin for great good!</h2>
          <p>Learn the Blockchain</p>
        </Card>
      </Cards>
    </div>
  );
};

export default compose(withHeader)(styled(Home)`
width: 100%;
h2 {
}
`);
