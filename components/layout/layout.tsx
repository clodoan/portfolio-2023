import React from 'react';
import styled from 'styled-components';

import Navigation from '../navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Main>{children}</Main>
      <Navigation />
    </>
  );
};
const Main = styled.main`
  position: relative;
`;

export default Layout;
