import React from 'react';
import styled, { css } from 'styled-components';

const Layout = styled.main`
  ${({ theme }) => css`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.background.tertiary};
    opacity: 0.8;
    background-image: radial-gradient(
        ${theme.background.tertiary} 1.2px,
        transparent 1.2px
      ),
      radial-gradient(
        ${theme.background.tertiary} 1.2px,
        ${theme.background.primary} 1.2px
      );
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  `}
`;

export default Layout;
