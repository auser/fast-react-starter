import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import presets from 'utils/presets';
import typo from 'utils/typography';
const {rhythm} = typo;

const Logo = styled.div`
  flex: 1;
  font-size: ${rhythm(1.2)};
`;

const LinksWrapper = styled.div`text-align: right;`;

export const Header = props => {
  return (
    <div className={props.className}>
      <Logo>
        <Link to="/">Newline.co</Link>
      </Logo>
      <LinksWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </LinksWrapper>
    </div>
  );
};

export default styled(Header)`
display: flex;
padding: ${presets.padding};
background: ${presets.brandLight};
height: ${presets.headerHeight};
justify-content: space-between;
align-items: center;
a {
  color: ${presets.headerLinkColor};
  text-decoration: none;
  font-size: ${rhythm(1)};
}
ul {
  list-style: none;
  li {
    display: inline;
    padding: ${presets.padding};
  }
}
`;
