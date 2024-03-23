import { ColorTheme } from './colors-types';

export const lightTheme: ColorTheme = {
  name: 'light',
  text: {
    primary: '#161616',
    secondary: '#5b6270',
    tertiary: '#9ca3af',
    accent: '#ff6600',
    quinary: '#f3f4f6',
  },
  background: {
    primary: '#f3f4f6',
    secondary: '#e5e7eb',
    tertiary: '#d1d5db',
    transparent: 'transparent',
    accent: '#ff6600',
  },
  border: {
    primary: '#d4d5d7',
    secondary: '#c4c5c7',
    tertiary: '#b4b5b7',
    transparent: 'transparent',
  },
  button: {
    primary: '#111827',
    secondary: '#1f2937',
    tertiary: '#374151',
  },
  link: {
    default: '#161616',
    hover: '#ff6600',
    active: '#ff6600',
  },
  shadow: {
    1: ` 0px 1px 4px 1px rgba(28, 28, 28, 0.04), 0px 1px 1px rgba(28, 28, 28, 0.07), 0px 1px 3px -4px rgba(189, 189, 189, 0.22); `,
    2: ' 0px 2px 5px 2px rgba(28, 28, 28, 0.04), 0px 4px 5px 4px rgba(155, 155, 155, 0.04), 0px 2px 20px 7px rgba(210, 210, 210, 0.08);',
    3: ` 0px 4px 8px 7px rgba(230, 230, 230, 0.04), 0px 2px 8px 2px rgba(50, 50, 50, 0.02), 0px 5px 12px 5px rgba(28, 28, 28, 0.06), 0px 1px 40px 6px rgba(28, 28, 28, 0.03);`,
  },
};

export const darkTheme: ColorTheme = {
  name: 'dark',
  text: {
    primary: '#ededed',
    secondary: '#a0a0a0',
    tertiary: '##7e7e7e',
    accent: '#e65c00',
    quinary: '#161616',
  },
  background: {
    primary: '#161616',
    secondary: '#1c1c1c',
    tertiary: '#232323',
    transparent: 'transparent',
    accent: '#e65c00',
  },
  border: {
    primary: '#1f2937',
    secondary: '#374151',
    tertiary: '#6b7280',
    transparent: 'transparent',
  },
  button: {
    primary: '#f3f4f6',
    secondary: '#e5e7eb',
    tertiary: '#d1d5db',
  },
  link: {
    default: '#f3f4f6',
    hover: '#e65c00',
    active: '#ff6600',
  },
  shadow: {
    1: ` 0px 1px 4px 1px rgba(28, 28, 28, 0.04), 0px 1px 1px rgba(28, 28, 28, 0.07), 0px 1px 3px -4px rgba(189, 189, 189, 0.22); `,
    2: ' 0px 2px 5px 2px rgba(28, 28, 28, 0.04), 0px 4px 5px 4px rgba(155, 155, 155, 0.04), 0px 2px 20px 7px rgba(210, 210, 210, 0.08);',
    3: ` 0px 4px 8px 7px rgba(230, 230, 230, 0.04), 0px 2px 8px 2px rgba(50, 50, 50, 0.02), 0px 5px 12px 5px rgba(28, 28, 28, 0.06), 0px 1px 40px 6px rgba(28, 28, 28, 0.03);`,
  },
};
