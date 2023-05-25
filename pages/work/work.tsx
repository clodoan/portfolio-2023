import SEO from '@/components/seo';
import { media, spacing } from '@/styles';
import React from 'react';
import styled, { css } from 'styled-components';

import Intro from '../home/components/intro';

const Work = () => {
  return (
    <>
      <SEO />
      <Container>Work</Container>
    </>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${theme.background.primary};
    padding: ${spacing[5]};
    gap: ${spacing[10]};
    z-index: 2;
    min-height: 100vh;
    margin: 0 auto;

    a {
      text-decoration: none;
    }

    @media ${media.tablet} {
      max-width: 912px;
      flex-direction: row;
    }
  `}
`;

export default Work;
