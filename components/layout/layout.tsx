import React from 'react';
import styled, { css } from 'styled-components';

const Layout = styled.main`
  ${({ theme }) => css`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.background.primary};
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${theme.background.secondary} 50%
    );
    background-size: 12px 12px;
    background-position: 0 0, 2px 2px;
  `}
`;

export default Layout;
