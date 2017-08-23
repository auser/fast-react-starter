import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import {compose} from 'recompose';

import withHeader from 'hocs/withHeader';
import Masthead from 'components/Masthead';

export const Home = props => {
  return (
    <div className={props.className}>
      <Helmet title={'Home'} />
      <Masthead />
      <h4>Home page</h4>
    </div>
  );
};

export default compose(withHeader)(styled(Home)`
width: 100%;
`);
