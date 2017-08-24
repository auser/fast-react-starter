import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import {compose} from 'recompose';

import withHeader from 'hocs/withHeader';
import Masthead from 'components/Home/Masthead';
import WhatIsIt from 'components/Home/WhatIsIt';
import SignupBanner from 'components/Home/SignupBanner';
// import Cards from 'components/Cards/Cards';
// import Card from 'components/Cards/Card';

export const Home = props => {
  return (
    <div className={props.className}>
      <Helmet title={'Home'} />
      <Masthead />
      <WhatIsIt />
      <SignupBanner />
    </div>
  );
};

export default compose(withHeader)(styled(Home)`
`);
