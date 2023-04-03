import { GlobalStyle, borderRadius, spacing, typographyBase } from '@/styles';
import {
  darkTheme,
  greenTheme,
  lightTheme,
  pinkTheme,
  purpleTheme,
} from '@/styles/colors';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled, { css } from 'styled-components';

const themes = {
  light: {
    key: lightTheme,
    name: 'light',
    icon: '🌤️',
  },
  dark: {
    key: darkTheme,
    name: 'dark',
    icon: '🌙',
  },
  green: {
    key: greenTheme,
    name: 'green',
    icon: '🌿',
  },
  pink: {
    key: pinkTheme,
    name: 'pink',
    icon: '🦩',
  },
  purple: {
    key: purpleTheme,
    name: 'purple',
    icon: '🍇',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeProvider theme={theme.key}>
      <GlobalStyle />
      <ThemeSelector
        type="single"
        defaultValue={themes.light.name}
        aria-label="theme-selection"
        onValueChange={(value) => console.log(value)}
      >
        <ThemeButton value={themes.light.name} aria-label={themes.light.name}>
          {themes.light.icon}
        </ThemeButton>
        <ThemeButton value={themes.dark.name} aria-label={themes.dark.name}>
          {themes.dark.icon}
        </ThemeButton>
        <ThemeButton value={themes.green.name} aria-label={themes.green.name}>
          {themes.green.icon}
        </ThemeButton>
        <ThemeButton value={themes.pink.name} aria-label={themes.pink.name}>
          {themes.pink.icon}
        </ThemeButton>
        <ThemeButton value={themes.purple.name} aria-label={themes.purple.name}>
          {themes.purple.icon}
        </ThemeButton>
      </ThemeSelector>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const ThemeSelector = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing[4]};
`;
const ThemeButton = styled(ToggleGroup.Item)`
  ${({ theme }) => css`
    padding: ${spacing[2]};
    border-radius: ${borderRadius.full};
    border: 1px solid ${theme.border.primary};
    background-color: ${theme.background.primary};
    color: ${theme.text.primary};
    font-size: ${typographyBase.fontSize[2]};
  `}
`;
