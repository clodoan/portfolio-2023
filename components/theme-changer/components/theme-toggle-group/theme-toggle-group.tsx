import { borderRadius, spacing } from '@/styles';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import React from 'react';
import styled, { css } from 'styled-components';

import { Theme, Themes } from '../themes-list/themes-list';
import ThemeToggle from './components/theme-toggle';

type ThemeToggleGroupProps = {
  onValueChange: (value: string) => void;
  defaultValue: string;
  themes: Themes;
  direction?: 'row' | 'column';
};

const ThemeToggleGroup = ({
  onValueChange,
  defaultValue,
  themes,
  direction = 'column',
}: ThemeToggleGroupProps) => {
  return (
    <StyledRoot
      type="single"
      aria-label="theme-selection"
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      direction={direction}
    >
      {themes.map((theme: Theme) => {
        return (
          <ThemeToggle name={theme.name} icon={theme.icon} key={theme.name} />
        );
      })}
    </StyledRoot>
  );
};

const StyledRoot = styled(ToggleGroup.Root)<{ direction: string }>`
  ${({ direction }) => css`
    display: flex;
    border-radius: ${borderRadius.full};
    flex-direction: ${direction === 'row' ? 'row' : 'column'};
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: ${spacing[2]} 0 ${spacing[3]} 0;
  `}
`;

export default ThemeToggleGroup;
