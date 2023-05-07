import { spacing } from '@/styles';
import { media } from '@/styles';
import styled, { css, useTheme } from 'styled-components';

import ThemeToggleGroup from '../theme-toggle-group';
import themesList from '../themes-list';

type DesktopThemeChangerProps = {
  onValueChange: (value: any) => void;
};

const DesktopThemeChanger = ({ onValueChange }: DesktopThemeChangerProps) => {
  const activeTheme = useTheme();

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
    <Container>
      <ThemeToggleGroup
        onValueChange={(value: string) => handleValue(value)}
        defaultValue={activeTheme.name}
        themes={themesList}
      />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    z-index: 100;
    flex-direction: column-reverse;
    background-color: ${theme.background.primary};
    overflow: hidden;

    @media ${media.desktop} {
      display: flex;
    }
  `}
`;

export default DesktopThemeChanger;
