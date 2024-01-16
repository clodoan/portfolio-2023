import { Border } from '../border';
import { ColorTheme } from '../colors';
import { Spacing } from '../spacing';
import { TypographyBaseProps } from '../typography-base';

export type Theme = {
  colors: ColorTheme;
  spacing: Spacing;
  typography: TypographyBaseProps;
  border: Border;
};
