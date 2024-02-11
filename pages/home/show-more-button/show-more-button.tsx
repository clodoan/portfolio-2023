import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import styled, { css } from 'styled-components';

type ShowMoreButtonProps = {
  open: boolean;
  onClick: () => void;
  area?: string;
};
const ShowMoreButton = ({ open, onClick, area }: ShowMoreButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} as="button" area={area}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          d={open ? 'M 6 12 L 18 12' : 'M 6 12 L 18 12 M 12 6 L 12 18'}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            transition: 'transform 0.1s ease-out',
            transformOrigin: 'center',
            transform: open ? 'rotate(180deg)' : 'rotate(90deg)',
          }}
        />
      </svg>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ area?: string }>`
  ${({ theme, area }) => css`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: ${area};
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.text.tertiary};
    height: ${theme.spacing[5]};
    width: ${theme.spacing[5]};
    background-color: ${theme.colors.background.primary};
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.05),
      0px 1px 2px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.accent};
      box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.05),
        0px 2px 2px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(255, 165, 0, 0.1);
    }

    &:active {
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.primary};
      box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.1);
    }
  `}
`;

export default ShowMoreButton;
