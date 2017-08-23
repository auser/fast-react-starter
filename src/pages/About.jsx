import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import {compose} from 'recompose';

import withHeader from 'hocs/withHeader';

export const About = props => {
  return (
    <div className={props.className}>
      <Helmet title={'About'} />
      <h4>About page</h4>
    </div>
  );
};

export default compose(withHeader)(styled(About)`
width: 100%;
`);
