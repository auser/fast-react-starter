import * as React from 'react';
import styled from 'styled-components';

import Cards from '../Cards/Cards';
import Card from '../Cards/Card';

export const WhatIsIt = props => {
  return (
    <Cards className={props.className}>
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
  );
};

export default styled(WhatIsIt)`
width: 100%;
text-align: center;
h2 {
  font-size: 1.1em;
  font-weight: light;
}
p {
  font-size: 0.9em;
  font-weight: lighter;
}
`;
