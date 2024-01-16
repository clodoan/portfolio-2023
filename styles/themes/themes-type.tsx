import { Border } from '../border';
import { ColorTheme } from '../colors';
import { Spacing } from '../spacing';
import { TypographyBaseProps } from '../typography-base';

enum ThemeNamesEnum {
  light = 'light',
  dark = 'dark',
}

export type ThemeNames = keyof typeof ThemeNamesEnum;

export type Theme = {
  name: ThemeNames;
  colors: ColorTheme;
  spacing: Spacing;
  typography: TypographyBaseProps;
  border: Border;
};
