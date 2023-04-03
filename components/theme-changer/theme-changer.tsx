import { GlobalStyle, borderRadius, spacing, typographyBase } from '@/styles';
import {
  darkTheme,
  greenTheme,
  lightTheme,
  pinkTheme,
  purpleTheme,
} from '@/styles/colors';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled, { css } from 'styled-components';

type ThemeChangerProps = {
  onValueChange: (value: any) => void;
  defaultValue?: string;
};

const themes = {
  light: {
    key: lightTheme,
    name: 'light',
    icon: '🌤️',
  },
  dark: {
    key: darkTheme,
    name: 'dark',
    icon: '🌝',
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

const ThemeChanger = ({ onValueChange }: ThemeChangerProps) => {
  // const [theme, setTheme] = useState(themes.light);
  const [themesVisible, setThemesVisible] = useState(false);

  const HandleValue = (value: any) => {
    switch (value) {
      case 'light':
        onValueChange(themes.light);
        break;
      case 'dark':
        onValueChange(themes.dark);
        break;
      case 'green':
        onValueChange(themes.green);
        break;
      case 'pink':
        onValueChange(themes.pink);
        break;
      case 'purple':
        onValueChange(themes.purple);
        break;
      default:
        onValueChange(themes.light);
        break;
    }
  };
  return (
    <>
      <ThemesTrigger onClick={() => setThemesVisible(!themesVisible)}>
        {themesVisible ? '🎨' : '☕'}
      </ThemesTrigger>
      {themesVisible && (
        <ThemeSelector
          type="single"
          defaultValue={themes.light.name}
          aria-label="theme-selection"
          onValueChange={(value) => HandleValue(value)}
          forwardedAs={motion.div}
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
          <ThemeButton
            value={themes.purple.name}
            aria-label={themes.purple.name}
          >
            {themes.purple.icon}
          </ThemeButton>
        </ThemeSelector>
      )}
    </>
  );
};

const ThemeSelector = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing[2]};
  position: absolute;
  top: 0;
  left: ${spacing[20]};
`;

const ThemesTrigger = styled.button`
  ${({ theme }) => css`
    all: unset;
    position: relative;
    height: ${spacing[10]};
    width: ${spacing[10]};
    border-radius: ${borderRadius.full};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background.transparent};
    color: ${theme.text.primary};
    font-size: ${typographyBase.fontSize[2]};
    padding: ${spacing[2]};
  `}
`;

const ThemeButton = styled(ToggleGroup.Item)`
  ${({ theme }) => css`
    all: unset;
    position: relative;
    padding: ${spacing[2]};
    border-radius: ${borderRadius.full};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background.transparent};
    color: ${theme.text.primary};
    font-size: ${typographyBase.fontSize[2]};
    width: ${spacing[10]};
    height: ${spacing[10]};

    &[data-state='off'] {
      &:after {
        content: '';
        height: ${spacing[1]};
        width: ${spacing[1]};
        background-color: ${theme.background.transparent};
        border-radius: ${borderRadius.full};
        position: absolute;
        bottom: ${spacing[2]};
      }
    }

    &[data-state='on'] {
      &:after {
        content: '';
        height: ${spacing[1]};
        width: ${spacing[1]};
        background-color: ${theme.background.tertiary};
        border-radius: ${borderRadius.full};
        position: absolute;
        bottom: ${spacing[2]};
      }
   `}
`;

export default ThemeChanger;
