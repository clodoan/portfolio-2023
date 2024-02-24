import border from '@/styles/border';
import { lightTheme } from '@/styles/colors';
import spacing from '@/styles/spacing';
import typographyBase from '@/styles/typography-base';

import { Theme } from '../themes-type';

const theme: Theme = {
  name: 'light',
  spacing: {
    ...spacing,
  },
  typography: {
    fontFamily: typographyBase.fontFamily,
    fontWeight: typographyBase.fontWeight,
    fontSize: typographyBase.fontSize,
    lineHeight: typographyBase.lineHeight,
  },
  colors: {
    text: lightTheme.text,
    background: lightTheme.background,
    border: lightTheme.border,
    button: lightTheme.button,
    link: lightTheme.link,
    shadow: lightTheme.shadow,
  },
  border: {
    width: border.width,
    radius: border.radius,
  },
};

export default theme;
