import {css} from 'styled-components';

const sizes: any = {
  mobile: 400,
  phablet: 550,
  tablet: 700,
  desktop: 1000,
  hd: 1200,
  vhd: 1450,
  vvhd: 1650
};

interface IPreset {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  hd?: any;
  vhd?: any;
  vvhd?: any;

  maxWidth: number;
  maxWidthWithSidebar: number;
  sidebarWidth: string;
  bodyFontSize: number;
  padding: string;

  sidebar: string;
  brand: string;
  brandLight: string;
  brandLighter: string;
  headerColor: string;
  headerLinkColor: string;
  headerHeight: string;
  footerHeight: string;
  footerColor: string;
  accent: string;
  block: string;
}

export const presets: IPreset = {
  maxWidth: 36,
  maxWidthWithSidebar: 26,

  sidebarWidth: '14em',

  bodyFontSize: 16,
  padding: '1.5rem',

  // Colors
  sidebar: `#fcfaff`,
  brand: `rgba(58, 99, 204, 1.000)`,
  brandLight: `rgba(79, 30, 143, 1.000)`,
  brandLighter: `rgba(99, 50, 173, 1.000)`,

  headerColor: 'rgba(99, 50, 173, 1.000)',
  headerLinkColor: '#ffffff',
  headerHeight: '3.5em',

  footerHeight: '4.5em',
  footerColor: 'rgba(255, 255, 255, 1.000)',

  accent: `#FF852F`,

  block: `box-shadow: 0 1px 0 rgba(25, 17, 34, 0.4);`
};

Object.keys(sizes).reduce((acc: any, label: string) => {
  const emSize = sizes[label] / presets.bodyFontSize;
  acc[label] = (...args: any[]) => css`
  @media (min-width: ${emSize}em) {
    ${css(args[0], ...args)}
  }
  `;
  return acc;
}, presets);

export default presets;
