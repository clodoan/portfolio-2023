import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

import { darkTheme, lightTheme } from './colors';

type ThemeType = typeof lightTheme | typeof darkTheme;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${({ theme }) => css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html {
        font-size: 16px;
        color: ${theme.text.primary};
        background-color: ${theme.background.primary};
      }
      body {
        margin: 0;
        overflow-x: hidden;
      }
    `}
`;
