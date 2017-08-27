import * as React from 'react';
import * as classnames from 'classnames';

import presets from 'utils/presets';
import styled from 'styled-components';

export const Pricing = (props: any) => {
  return (
    <div className={classnames('pricing', props.className)}>
      <div className="pricingTable">
        <h2>One</h2>
        <ul>
          <li>Point</li>
          <li>Other point</li>
          <li>One more point</li>
        </ul>
        <button>Jump on board</button>
      </div>
      <div className="pricingTable">
        <h2>Two</h2>
        <ul>
          <li>Point</li>
          <li>Other point</li>
          <li>One more point</li>
        </ul>
        <button>Jump on board</button>
      </div>
    </div>
  );
};

export default styled(Pricing)`
display: flex;
text-align: center;
justify-content: center;
padding: ${presets.padding};

.pricingTable {
  flex: 0.3;
  ul {
    list-style: none;
    li {
      text-align: left;
    }
  }
}
`;
