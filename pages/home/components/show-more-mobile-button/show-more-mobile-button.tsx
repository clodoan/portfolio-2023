import { Typography } from '@components';
import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ShowMoreButtonProps = {
  open: boolean;
  onClick: () => void;
  area?: string;
  showMoreText: string;
  showLessText: string;
};
const ShowMoreMobileButton = ({
  open,
  onClick,
  area,
  showMoreText,
  showLessText,
}: ShowMoreButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} as="button" area={area} tabIndex={0}>
      {open ? <MinusCircledIcon /> : <PlusCircledIcon />}
      <Typography variant="body-2">
        {open ? showLessText : showMoreText}
      </Typography>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ area?: string }>`
  ${({ theme, area }) => css`
    all: unset;
    display: flex;
    width: 100%;
    padding: ${theme.spacing[1]};
    transition: all 0.3s ease;
    border-radius: ${theme.border.radius.medium};
    justify-content: start;
    align-items: center;
    gap: ${theme.spacing[2]};
    flex-direction: row;

    p,
    svg {
      color: ${theme.colors.text.accent};
    }

    &:hover {
      border-color: ${theme.colors.text.accent};
      color: ${theme.colors.text.accent};
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;

export default ShowMoreMobileButton;
