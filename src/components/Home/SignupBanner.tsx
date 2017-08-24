import * as React from 'react';
import styled from 'styled-components';

import presets from 'utils/presets';

export const SignupBanner = (props: any) => {
  return (
    <div className={props.className}>
      <h3>SignupBanner</h3>
      <h4>Form here</h4>
    </div>
  );
};

export default styled(SignupBanner)`
display: flex;
background: ${presets.brand};
padding: ${presets.padding};
justify-content: space-between;
`;
