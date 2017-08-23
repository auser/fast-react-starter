import Typography from 'typography';
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY
} from 'typography-breakpoint-constants';
import presets from './presets';

const options = {
  headerFontFamily: ['Camphor', 'Lato', 'sans-serif'],
  bodyFontFamily: ['Camphor', 'Lato', 'sans-serif'],
  baseFontSize: `16px`,
  baseLineHeight: 1.4,
  // headerColor: `#44421f`,
  // bodyColor: `#44421f`,
  blockMarginBottom: 0.65,
  scaleRatio: 2.15
};

const typography = new Typography(options);

export default typography;
