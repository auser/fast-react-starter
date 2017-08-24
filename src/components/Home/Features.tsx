import * as React from 'react';
import styled from 'styled-components';

import presets from 'utils/presets';

export const Features = (props: any) => {
  return (
    <div className={props.className}>
      <h2>Features</h2>
      <div className="contents">
        <div className="feature">
          <h4>Access to the entire library</h4>
          <p>Access to every video on the site</p>
        </div>
        <div className="feature">
          <h4>Worldwide access</h4>
          <p>World over</p>
        </div>
        <div className="feature">
          <h4>Access to the entire library</h4>
          <p>Access to every video on the site</p>
        </div>
        <div className="feature">
          <h4>Worldwide access</h4>
          <p>World over</p>
        </div>
      </div>
    </div>
  );
};

export default styled(Features)`
display: flex;
padding: ${presets.padding};
justify-content: center;
align-items: center;
flex-direction: column;
h2 {
  text-align: center;
}
.contents {
  flex: 1;
  .feature {
    flex: 0.5;
    p {
      font-size: 0.9em;
    }
  }
}
`;
