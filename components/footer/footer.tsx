import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import Flex from '../flex';
import { TwitterLogo } from './social-icons';
import { ReadCVIcon } from './social-icons/social-icons';

const footerLinks = [
  {
    name: 'twitter',
    href: 'https://x.com/clodoan',
    icon: <TwitterLogo />,
  },
  {
    name: 'linkedin',
    href: 'https://read.cv/claudio',
    icon: <ReadCVIcon />,
  },
];

const Footer = () => {
  return (
    <Container
      as="footer"
      gap={3}
      alignItems="start"
      justifyContent="end"
      width="100%"
    >
      {footerLinks.map((link) => (
        <ButtonContainer key={link.name} href={link.href} target="_blank">
          {link.icon}
        </ButtonContainer>
      ))}
    </Container>
  );
};

const Container = styled(Flex)`
  ${({ theme }) => css`
    position: fixed;
    padding: ${theme.spacing[3]};
    bottom: ${theme.spacing[5]};
    right: ${theme.spacing[5]};
  `}
`;

const ButtonContainer = styled(Link)`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: ${theme.spacing[7]};
    width: ${theme.spacing[7]};
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.text.tertiary};
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

    svg {
      height: 18px;
      width: 18px;
    }
  `}
`;

export default Footer;
