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
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import styled, { css, useTheme } from 'styled-components';
import { useOnClickOutside } from 'usehooks-ts';

type ThemeChangerProps = {
  onValueChange: (value: any) => void;
};

const themes = [
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

const ThemeChanger = ({ onValueChange }: ThemeChangerProps) => {
  const [themesVisible, setThemesVisible] = useState(true);
  const activeTheme = useTheme();
  const ref = useRef(null);

  useOnClickOutside(ref, () => setThemesVisible(false));

  const HandleValue = (value: any) => {
    switch (value) {
      case 'light':
        onValueChange(lightTheme);
        break;
      case 'dark':
        onValueChange(darkTheme);
        break;
      case 'green':
        onValueChange(greenTheme);
        break;
      case 'pink':
        onValueChange(pinkTheme);
        break;
      case 'purple':
        onValueChange(purpleTheme);
        break;
      default:
        onValueChange(lightTheme);
        break;
    }
  };

  useEffect(() => {
    if (isMobile) {
      setThemesVisible(false);
    }
  }, []);

  return (
    <Container layout ref={ref}>
      <ThemesTrigger
        layout
        onClick={() => setThemesVisible(!themesVisible)}
        data-active={themesVisible}
      >
        <IconWrapper>🎨</IconWrapper>
      </ThemesTrigger>
      <AnimatePresence>
        {themesVisible && (
          <StyledRoot
            type="single"
            aria-label="theme-selection"
            onValueChange={(value) => HandleValue(value)}
            defaultValue={activeTheme.name}
          >
            {themes.map((theme) => {
              return (
                <StyledItem
                  value={theme.name}
                  aria-label={theme.name}
                  key={theme.name}
                >
                  <IconWrapper>{theme.icon}</IconWrapper>
                </StyledItem>
              );
            })}
          </StyledRoot>
        )}
      </AnimatePresence>
    </Container>
  );
};

const StyledRoot = styled(ToggleGroup.Root)`
  display: flex;
  border-radius: ${borderRadius.full};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: ${spacing[2]} 0 ${spacing[3]} 0;
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
    border: 1px solid ${isMobile ? theme.border.primary : 'transparent'};

    overflow: hidden;

    @media ${media.mobileL} {
      position: fixed;
      transform: translateY(-50%);
      top: 50%;
      height: fit-content;
      left: 0;
    }
  `}
`;
const MotionWrapper = styled(motion.span)``;

const ThemesTrigger = styled(motion.button)`
  ${({ theme }) => css`
    all: unset;
    display: flex;
    position: relative;
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

    @media ${media.mobileL} {
      display: none;
    }
  `}
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${spacing[5]};
  height: ${spacing[5]};
`;

export default ThemeChanger;
