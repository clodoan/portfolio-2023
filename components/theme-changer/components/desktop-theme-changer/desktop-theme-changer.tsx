import { borderRadius, spacing } from '@/styles';
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
        direction="row"
      />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    right: ${spacing[4]}};
    bottom: 0;
    transform: translateY(-50%);
    width: fit-content;
    z-index: 100;
    flex-direction: column-reverse;
    background-color: ${theme.background.primary};
    border-radius: ${borderRadius.full};
    overflow: hidden;

    @media ${media.tablet} {
      display: flex;
    }
  `}
`;

export default DesktopThemeChanger;
