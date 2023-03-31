import { createGlobalStyle } from "styled-components";

import colors from "./colors";
import typography from "./typography";

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: ${typography.fontFamily.body}, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: ${colors.light.text.primary};
        background-color: ${colors.light.background.primary};
        font-size: 16px;
    }
    body {
        margin: 0;
        overflow-x: hidden;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: ${typography.fontWeight.medium};
        line-height: 1.25;
    }   
    h1 {
        font-size: ${typography.fontSize[10]};
    }
`;
