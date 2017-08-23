import * as React from 'react';

import styled from 'styled-components';
import presets from 'utils/presets';
import typography from 'utils/typography';
const {rhythm, scale, options} = typography;

interface Props {
  className: string;
  children: any;
}

export const Card = ({children, className}: Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default styled(Card)`
box-sizing: border-box;
display: flex;
flex: 0 0 100%;
max-width: 100%;
flex-direction: column;
justify-content: center;
${presets.mobile`
flex: 0 0 100%;
`}
${presets.tablet`
flex: 0 0 50%;
max-width: 50%;
`}
${presets.desktop`
flex: 0 0 33.333333%;
max-width: 33.333333%;
&:nth-child(4) {
  max-width: 100%;
}
&:nth-child(3n+1) {
  border-left: 0;
}
`}
`;
