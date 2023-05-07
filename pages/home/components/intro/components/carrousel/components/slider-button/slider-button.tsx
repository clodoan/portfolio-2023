import { borderRadius, media, spacing } from '@/styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  type?: 'prev' | 'next';
};

const SliderButton = ({ onClick, className, type }: ButtonProps) => {
  return (
    <Container data-type="prev" onClick={onClick} className={className}>
      {type === 'prev' && <ChevronLeftIcon />}
      {type === 'next' && <ChevronRightIcon />}
    </Container>
  );
};

const Container = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.border.secondary};
    border-radius: ${borderRadius.full};
    display: flex;
    padding: ${spacing[4]};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
    z-index: 2;

    &:hover {
      background-color: ${theme.background.secondary};
      border: 1px solid ${theme.border.primary};
    }

    svg path {
      fill: ${theme.text.secondary};
    }

    @media ${media.mobile} {
      padding: ${spacing[2]};
    }
  `}
`;

export default SliderButton;
