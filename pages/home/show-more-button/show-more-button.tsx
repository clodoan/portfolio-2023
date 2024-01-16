import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import styled, { css } from 'styled-components';

type ShowMoreButtonProps = {
  open: boolean;
  onClick: () => void;
};
const ShowMoreButton = ({ open, onClick }: ShowMoreButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} as="button">
      {open ? <MinusCircledIcon /> : <PlusCircledIcon />}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing[6]};
  `}
`;

export default ShowMoreButton;
