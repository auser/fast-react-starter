import React from 'react';
import styled from 'styled-components';
import presets from 'utils/presets';
import typo from 'utils/typography';
const {rhythm, options} = typo;

export const Masthead = props => {
  return (
    <div className={props.className}>
      <h1>Masthead</h1>
      <p>Do you want to learn?</p>
    </div>
  );
};

export default styled(Masthead)`
display: flex;
flex-direction: column;
padding-top: ${rhythm(1)};
padding-bottom: ${rhythm(1)};
text-align: center;
justify-content: center;
box-shadow: 0 1px 0px rgba(25,17,34,1.0);
background-image: linear-gradient(180deg, ${presets.brandLight}, 75%, ${presets.brandLighter});
font-family: ${options.headerFontFamily.join(',')};
h1, p {
  color: #fff;
  padding: 0;
  margin: 0;
}
`;
