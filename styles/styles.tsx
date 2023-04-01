import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'
import { lightTheme, darkTheme } from './colors'
import { typography, typographyBase } from './typography'

type ThemeType = typeof lightTheme | typeof darkTheme

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
      h1 {
        font-family: ${typographyBase.fontFamily.heading};
        font-weight: ${typographyBase.fontWeight.heading};
        font-size: ${typographyBase.fontSize[5]};
        line-height: ${typographyBase.lineHeight[5]};
      }
      h2 {
        font-family: ${typographyBase.fontFamily.heading};
        font-weight: ${typographyBase.fontWeight.heading.bold};
        font-size: ${typographyBase.fontSize[4]};
        line-height: ${typographyBase.lineHeight[4]};
      }
      h3 {
        font-family: ${typographyBase.fontFamily.heading};
        font-weight: ${typographyBase.fontWeight.heading.bold};
        font-size: ${typographyBase.fontSize[3]};
        line-height: ${typographyBase.lineHeight[3]};
      }
      h4 {
        font-family: ${typographyBase.fontFamily.heading};
        font-weight: ${typographyBase.fontWeight.heading.bold};
        font-size: ${typographyBase.fontSize[2]};
        line-height: ${typographyBase.lineHeight[2]};
      }
      p {
        font-family: ${typographyBase.fontFamily.body};
        font-weight: ${typographyBase.fontWeight.body.regular};
        font-size: ${typographyBase.fontSize[2]};
        line-height: ${typographyBase.lineHeight[2]};
      }
    `}
`
