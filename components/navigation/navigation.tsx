import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import Flex from '../flex';
import Typography from '../typography';

type NavigationElement = {
  path: string;
  label: string;
};

const navigationLinks: NavigationElement[] = [
  { path: '/', label: 'About' },
  { path: '/craft', label: 'Craft' },
];

const Navigation = () => {
  return (
    <NavigationContainer defaultValue="/" orientation="horizontal">
      <List>
        {navigationLinks.map(({ path, label }) => (
          <StyledItem key={path}>
            <NavigationMenu.Link asChild>
              <StyledLink href={path}>{label}</StyledLink>
            </NavigationMenu.Link>
          </StyledItem>
        ))}
      </List>
    </NavigationContainer>
  );
};

const StyledItem = styled(NavigationMenu.Item)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing[3]};
    text-decoration: none;
  `}
`;

const NavigationContainer = styled(NavigationMenu.Root)`
  ${({ theme }) => css`
    position: fixed;
    left: 50%;
    bottom: ${theme.spacing[4]};
    transform: translateX(-50%);
    z-index: 100;
  `}
`;

const List = styled(NavigationMenu.List)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing[3]};
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    border-radius: ${theme.border.radius.full};
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacing[1]};
    color: ${theme.colors.text.tertiary};
    font-family: ${theme.typography.fontFamily.body};
    font-size: ${theme.typography.fontSize[2]};
  `}
`;

export default Navigation;
