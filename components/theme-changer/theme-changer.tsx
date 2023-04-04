import { borderRadius, spacing, typographyBase } from '@/styles';
import {
  darkTheme,
  greenTheme,
  lightTheme,
  pinkTheme,
  purpleTheme,
} from '@/styles/colors';
import { Cross1Icon, MagicWandIcon } from '@radix-ui/react-icons';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type ThemeChangerProps = {
  onValueChange: (value: any) => void;
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
  const [themesVisible, setThemesVisible] = useState(false);
  const [storedTheme, setStoredTheme] = useState<string | null>(null);

  const HandleValue = (value: any) => {
    switch (value) {
      case 'light':
        onValueChange(themes.light);
        localStorage.setItem('theme', 'light');
        break;
      case 'dark':
        onValueChange(themes.dark);
        localStorage.setItem('theme', 'dark');
        break;
      case 'green':
        onValueChange(themes.green);
        localStorage.setItem('theme', 'green');
        break;
      case 'pink':
        onValueChange(themes.pink);
        localStorage.setItem('theme', 'pink');
        break;
      case 'purple':
        onValueChange(themes.purple);
        localStorage.setItem('theme', 'purple');
        break;
      default:
        onValueChange(themes.light);
        localStorage.setItem('theme', 'light');
        break;
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setStoredTheme(storedTheme);
  });

  return (
    <Container>
      <ThemesTrigger onClick={() => setThemesVisible(!themesVisible)}>
        <AnimatePresence>
          {themesVisible ? <Cross1Icon /> : <MagicWandIcon />}
        </AnimatePresence>
      </ThemesTrigger>
      <AnimatePresence>
        {themesVisible && (
          <Wrapper
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', duration: 0.3 },
            }}
            exit={{
              x: -100,
              opacity: 0,
              transition: { duration: 0.1 },
            }}
          >
            <ThemeSelector
              type="single"
              aria-label="theme-selection"
              onValueChange={(value) => HandleValue(value)}
              defaultValue={storedTheme ? storedTheme : themes.light.name}
            >
              <ThemeButton
                value={themes.light.name}
                aria-label={themes.light.name}
              >
                {themes.light.icon}
              </ThemeButton>
              <ThemeButton
                value={themes.dark.name}
                aria-label={themes.dark.name}
              >
                {themes.dark.icon}
              </ThemeButton>
              <ThemeButton
                value={themes.green.name}
                aria-label={themes.green.name}
              >
                {themes.green.icon}
              </ThemeButton>
              <ThemeButton
                value={themes.pink.name}
                aria-label={themes.pink.name}
              >
                {themes.pink.icon}
              </ThemeButton>
              <ThemeButton
                value={themes.purple.name}
                aria-label={themes.purple.name}
              >
                {themes.purple.icon}
              </ThemeButton>
            </ThemeSelector>
          </Wrapper>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Wrapper = styled(motion.span)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${borderRadius.full};
    border: 1px solid ${theme.border.secondary};
    padding: 0 ${spacing[2]};
    position: absolute;
    top: 0;
    left: ${spacing[20]};
  `}
`;

const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${spacing[4]};
    left: ${spacing[4]};
    z-index: 100;
    border-radius: ${borderRadius.full};
    background-color: ${theme.background.transparent};
    border: 1px solid ${theme.border.secondary};
  `}
`;

const ThemeSelector = styled(ToggleGroup.Root)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${spacing[2]};
  `}
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
