import { DefaultTheme, createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    ${({ theme }) => css`
      :root {
        --max-content-width-desktop: 440px;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
      }
      html {
        font-size: 16px;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.background.primary};
        white-space: pre-line;
        -webkit-text-size-adjust: 100%;
      }
      body {
        position: relative;
        margin: 0;
        overflow: auto;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        background-image: url('/background.svg'),
          linear-gradient(
            180deg,
            ${theme.colors.background.primary},
            ${theme.colors.background.secondary}
          );
        background-repeat: repeat;
        background-attachment: fixed;
        background-position: center center;
        background-size: 200px;
      }
      ::selection {
        background: ${theme.colors.background.accent};
        color: ${theme.colors.text.quinary};
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
`;
