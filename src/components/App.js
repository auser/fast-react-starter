import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router} from 'react-router-dom';
import client from 'lib/apollo';
import Helmet from 'react-helmet';

import styled from 'styled-components';
import {TypographyStyle} from 'react-typography';
import typography from 'utils/typography';

import Routes from 'pages/routes';

export const App = props => {
  return (
    <ApolloProvider client={client}>
      <div className={props.className}>
        <Helmet>
          <TypographyStyle typography={typography} />
        </Helmet>
        <Router>
          <Routes />
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default styled(App)`
display: flex;
width: 100%;
height: 100%;
> div {
  width: 100%;
}
`;
