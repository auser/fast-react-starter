import * as React from 'react';

import styled from 'styled-components';
import presets from 'utils/presets';
import typography from 'utils/typography';
const {rhythm, scale, options} = typography;

interface Props {
  children: any;
  className: string;
}

const Cards = ({children, className}: Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default styled(Cards)`
display: flex;
flex: 1;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: ${presets.padding};
font-size: ${rhythm(3 / 5)};
`;
