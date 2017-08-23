import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import {compose} from 'recompose';

import withHeader from 'hocs/withHeader';

export const Home = props => {
  return (
    <div className={props.className}>
      <Helmet title={'Home'} />
      <h4>Home page</h4>
    </div>
  );
};

export default compose(withHeader)(styled(Home)`
width: 100%;
`);
