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
      <ListContainer>
        {navigationLinks.map(({ path, label }) => (
          <NavigationMenu.Item key={path} asChild>
            <NavigationMenu.Link asChild>
              <StyledLink href={path}>
                <Typography variant="body-1">{label}</Typography>
              </StyledLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </ListContainer>
    </NavigationContainer>
  );
};

const NavigationContainer = styled(NavigationMenu.Root)`
  ${({ theme }) => css`
    position: fixed;
    bottom: ${theme.spacing[1]};
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  `}
`;

const ListContainer = styled(NavigationMenu.List)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing[3]};
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    background-color: ${theme.colors.background.primary};
    border-radius: ${theme.border.radius.medium};
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacing[1]};
    color: ${theme.colors.text.secondary};
  `}
`;

export default Navigation;
