import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
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
        overflow: auto;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      ::selection {
        background: ${theme.background.tertiary};
      }
    `}
`;
