import { borderRadius, spacing, typographyBase } from '@/styles';
import { media } from '@/styles';
import {
  darkTheme,
  greenTheme,
  lightTheme,
  pinkTheme,
  purpleTheme,
} from '@/styles/colors';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

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
  const activeTheme = useTheme();

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
    <Container layout>
      <ThemesTrigger
        onClick={() => setThemesVisible(!themesVisible)}
        data-active={themesVisible}
        layout
      >
        🎨
      </ThemesTrigger>
      <AnimatePresence>
        {themesVisible && (
          <MotionWrapper
            initial={{ opacity: 0, x: 0, y: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.1, ease: 'easeOut' },
            }}
            exit={{
              x: 0,
              y: 0,
              opacity: 0,
              transition: { duration: 0.1 },
            }}
          >
            <StyledRoot
              type="single"
              aria-label="theme-selection"
              onValueChange={(value) => HandleValue(value)}
              defaultValue={activeTheme.name}
            >
              <StyledItem
                value={themes.light.name}
                aria-label={themes.light.name}
              >
                {themes.light.icon}
              </StyledItem>
              <StyledItem
                value={themes.dark.name}
                aria-label={themes.dark.name}
              >
                {themes.dark.icon}
              </StyledItem>
              <StyledItem
                value={themes.green.name}
                aria-label={themes.green.name}
              >
                {themes.green.icon}
              </StyledItem>
              <StyledItem
                value={themes.pink.name}
                aria-label={themes.pink.name}
              >
                {themes.pink.icon}
              </StyledItem>
              <StyledItem
                value={themes.purple.name}
                aria-label={themes.purple.name}
              >
                {themes.purple.icon}
              </StyledItem>
            </StyledRoot>
          </MotionWrapper>
        )}
      </AnimatePresence>
    </Container>
  );
};

const StyledRoot = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: ${spacing[2]} 0;
`;

const StyledItem = styled(ToggleGroup.Item)`
  ${({ theme }) => css`
    all: unset;
    position: relative;
    padding: ${spacing[6]};
    border-radius: ${borderRadius.full};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.text.primary};
    font-size: ${typographyBase.fontSize[2]};

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

const Container = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${spacing[4]};
    right: ${spacing[4]};
    bottom: ${spacing[4]};
    width: fit-content;
    z-index: 100;
    display: flex;
    flex-direction: column-reverse;
    background-color: ${theme.background.primary};
    border-radius: ${borderRadius.full};
    border: 1px solid ${theme.border.primary};

    @media ${media.mobileL} {
      left: 50%;
      transform: translateX(-50%);
      transform: translateX(0);
      bottom: ${spacing[4]};
      left: ${spacing[4]};
    }
  `}
`;
const MotionWrapper = styled(motion.span)``;

const ThemesTrigger = styled(motion.button)`
  ${({ theme }) => css`
    all: unset;
    display: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background.primary};
    color: ${theme.text.primary};
    font-size: ${typographyBase.fontSize[2]};
    border-radius: ${borderRadius.full};
    padding: ${spacing[6]};
    z-index: 2;

    &[data-active='true'] {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        height: 1px;
        width: 50%;
        background-color: ${theme.border.primary};
      }
    }
  `}
`;

export default ThemeChanger;
