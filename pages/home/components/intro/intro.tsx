import { media, spacing } from '@/styles';
import React from 'react';
import styled, { css } from 'styled-components';

import imageBeach from '../../../../public/images/home/beach.png';
import imageBerta from '../../../../public/images/home/berta.png';
import imageForest from '../../../../public/images/home/forest.png';
import imageMaiaSnow from '../../../../public/images/home/maia-snow.png';
import imageMeSun from '../../../../public/images/home/me-sun.png';
import imageMiami from '../../../../public/images/home/miami.png';
import imageSnowboard from '../../../../public/images/home/snowboard.png';
import imageSun from '../../../../public/images/home/sun.png';
import imageWharf from '../../../../public/images/home/wharf.png';
import Carrousel from './components/carrousel';
import MobileImage from './components/mobile-image';
import TextContent from './components/text-content';

const ImageArray = [
  imageMiami,
  imageForest,
  imageBeach,
  imageBerta,
  imageMaiaSnow,
  imageMeSun,
  imageSnowboard,
  imageSun,
  imageWharf,
];

const Intro = () => {
  return (
    <Container>
      <MobileImage image={imageMiami} />
      <Carrousel images={ImageArray} />
      <TextContent />
    </Container>
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

export default Intro;
