import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    ${({ theme }) => css`
      :root {
        --max-content-width-desktop: 420px;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html {
        font-size: 16px;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.background.primary};
        font-family: ${theme.typography.fontFamily.body};
      }
      body {
        margin: 0;
        overflow: auto;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      ::selection {
        background: ${theme.colors.background.tertiary};
      }
      a {
        text-decoration: none;
      }
    `}
`;
