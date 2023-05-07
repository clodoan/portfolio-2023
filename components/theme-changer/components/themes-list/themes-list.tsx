import {
  darkTheme,
  greenTheme,
  lightTheme,
  pinkTheme,
  purpleTheme,
} from '@/styles/colors';

export type Theme = {
  key: Object;
  name: string;
  icon: string;
};

export type Themes = Theme[];

const themesList = [
  { key: lightTheme, name: 'light', icon: '🌤️' },
  {
    key: darkTheme,
    name: 'dark',
    icon: '🌝',
  },
  {
    key: greenTheme,
    name: 'green',
    icon: '🌿',
  },
  {
    key: pinkTheme,
    name: 'pink',
    icon: '🦩',
  },
  {
    key: purpleTheme,
    name: 'purple',
    icon: '🍇',
  },
];

export default themesList;
