import { borderRadius, media, spacing, typographyBase } from '@/styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

type OpenButtonProps = {
  onClick: () => void;
  active: boolean;
};

const OpenButton = ({ onClick, active }: OpenButtonProps) => {
  return (
    <ThemesTrigger layout onClick={onClick} data-active={active}>
      <IconWrapper>🎨</IconWrapper>
    </ThemesTrigger>
  );
};

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

export default OpenButton;
