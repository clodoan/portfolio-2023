import { borderRadius, spacing, typographyBase } from '@/styles';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import React from 'react';
import styled, { css } from 'styled-components';

type ThemeToggleProps = {
  name: string;
  icon: string;
};

const ThemeToggle = ({ name, icon }: ThemeToggleProps) => {
  return (
    <StyledItem value={name} aria-label={name} key={name}>
      <IconWrapper>{icon}</IconWrapper>
    </StyledItem>
  );
};

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

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${spacing[5]};
  height: ${spacing[5]};
`;

export default ThemeToggle;
