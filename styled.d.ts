import { typography } from '@/components/typography';
import { borderRadius } from '@/styles';
import 'styled-components';

import { Border } from './styles/border/border-types';
import { BackgroundColor, BorderColor, TextColor } from './styles/colors';
import {
  ButtonColor,
  ColorTheme,
  ShadowColor,
} from './styles/colors/colors-types';
import { Spacing } from './styles/spacing';
import { TypographyBaseProps } from './styles/typography-base';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTheme;
    spacing: Spacing;
    typography: TypographyBaseProps;
    border: Border;
  }
}
