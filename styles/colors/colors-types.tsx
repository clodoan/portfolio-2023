export type BackgroundColor = {
  primary: string;
  secondary: string;
  tertiary: string;
  transparent: string;
};

export type TextColor = {
  primary: string;
  secondary: string;
  tertiary: string;
};

export type BorderColor = {
  primary: string;
  secondary: string;
  tertiary: string;
  transparent: string;
};

export type ButtonColor = {
  primary: string;
  secondary: string;
  tertiary: string;
};

export type ShadowColor = {
  1: string;
  2: string;
  3: string;
};

export type ColorTheme = {
  name?: string;
  text: TextColor;
  background: BackgroundColor;
  border: BorderColor;
  button: ButtonColor;
  link: ButtonColor;
  shadow: ShadowColor;
};
