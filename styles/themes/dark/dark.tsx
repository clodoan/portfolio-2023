import border from '@/styles/border';
import { darkTheme } from '@/styles/colors';
import spacing from '@/styles/spacing';
import typographyBase from '@/styles/typography-base';

import { Theme } from '../themes-type';

const theme: Theme = {
  name: 'dark',
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
    text: darkTheme.text,
    background: darkTheme.background,
    border: darkTheme.border,
    button: darkTheme.button,
    link: darkTheme.link,
    shadow: darkTheme.shadow,
  },
  border: {
    width: border.width,
    radius: border.radius,
  },
};

export default theme;
