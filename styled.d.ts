import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      transparent: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    border: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    shadow: {
      1: string;
      2: string;
      3: string;
    };
    button: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    link: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    input: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }
}
