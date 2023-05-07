import { media, spacing } from '@/styles';
import React from 'react';
import styled, { css } from 'styled-components';

import imageBertaSnow from '../../../../public/images/home/berta-snow.png';
import imageBerta from '../../../../public/images/home/berta.png';
import imageDrink from '../../../../public/images/home/drink.png';
import imageLights from '../../../../public/images/home/lights.png';
import imageMaiaSnow from '../../../../public/images/home/maia-snow.png';
import imageSun from '../../../../public/images/home/sun.png';
import imageWharf from '../../../../public/images/home/wharf.png';
import Carrousel from './components/carrousel';
import MobileImage from './components/mobile-image';
import TextContent from './components/text-content';

const ImageArray = [
  imageBertaSnow,
  imageBerta,
  imageDrink,
  imageLights,
  imageMaiaSnow,
  imageSun,
  imageWharf,
];

const Intro = () => {
  return (
    <Container>
      <MobileImage image={imageWharf} />
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

    a {
      text-decoration: none;
    }

    @media ${media.tablet} {
      margin: ${spacing[4]} auto ${spacing[10]} auto;
      max-width: 912px;
      flex-direction: row;
    }
  `}
`;

export default Intro;
