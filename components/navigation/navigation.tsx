import { borderRadius, spacing } from '@/styles';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import styled, { css } from 'styled-components';

import NavItem from './components/nav-item/nav-item';

const values = [
  { label: 'Home', value: 'home', href: '/' },
  { label: 'Work', value: 'work', href: '/work' },
];

export default () => {
  const router = useRouter();

  return (
    <Container>
      <Links>
        {values.map((value) => (
          <Wrapper>
            <NavItem key={value.value} href={value.href}>
              {value.label}
            </NavItem>
            {router.pathname === value.href && (
              <ActiveMarker layout layoutId="underline" />
            )}
          </Wrapper>
        ))}
      </Links>
    </Container>
  );
};

const Container = styled(NavigationMenu.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 2;
  overflow: visible;
  padding: ${spacing[4]} 0;
  top: 0;
  left: 0;
  z-index: 4;
`;

const Links = styled(NavigationMenu.List)`
  display: flex;
  flex-direction: row;
`;

const ActiveMarker = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme.background.tertiary};
    border-radius: ${borderRadius.full};
    z-index: 0;
  `};
`;

const Wrapper = styled.span`
  position: relative;
  isolation: isolate;
`;
