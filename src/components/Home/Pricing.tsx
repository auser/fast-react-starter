import * as React from 'react';
import * as classnames from 'classnames';
import styled from 'styled-components';

export const Pricing = (props: any) => {
  return (
    <div className={classnames('pricing', props.className)}>
      <div className="pricingTable">
        <h2>One</h2>
      </div>
      <div className="pricingTable">
        <h2>Two</h2>
      </div>
    </div>
  );
};

export default styled(Pricing)`
flex: 1;
.pricingTable {
  flex: 0.5;
}
`;
