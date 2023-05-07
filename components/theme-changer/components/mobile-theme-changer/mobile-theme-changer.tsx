import { borderRadius, spacing, typographyBase } from '@/styles';
import { media } from '@/styles';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { useOnClickOutside } from 'usehooks-ts';

import ThemeToggleGroup from '../theme-toggle-group';
import themesList from '../themes-list';
import OpenButton from './components/open-button';

type MobileThemeChangerProps = {
  onValueChange: (value: any) => void;
};

const MobileThemeChanger = ({ onValueChange }: MobileThemeChangerProps) => {
  const [isThemesListVisible, setIsThemesListVisible] = useState(false);
  const activeTheme = useTheme();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsThemesListVisible(false));

  const handleValue = (value: string) => {
    switch (value) {
      case 'light':
        onValueChange(themesList[0].key);
        break;
      case 'dark':
        onValueChange(themesList[1].key);
        break;
      case 'green':
        onValueChange(themesList[2].key);
        break;
      case 'pink':
        onValueChange(themesList[3].key);
        break;
      case 'purple':
        onValueChange(themesList[4].key);
        break;
      default:
        onValueChange(themesList[0].key);
        break;
    }
  };

  return (
    <Container layout ref={ref}>
      <OpenButton
        onClick={() => setIsThemesListVisible(!isThemesListVisible)}
        active={isThemesListVisible}
      />
      <AnimatePresence>
        {isThemesListVisible && (
          <ThemeToggleGroup
            onValueChange={(value: string) => handleValue(value)}
            defaultValue={activeTheme.name}
            themes={themesList}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    right: ${spacing[4]};
    bottom: ${spacing[4]};
    width: fit-content;
    z-index: 100;
    flex-direction: column-reverse;
    background-color: ${theme.background.primary};
    border-radius: ${borderRadius.full};
    border: 1px solid ${theme.border.primary};
    overflow: hidden;

    @media ${media.mobile} {
      display: none;
    }
  `}
`;

export default MobileThemeChanger;
