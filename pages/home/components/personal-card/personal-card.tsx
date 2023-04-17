import SocialChip from '@/components/social-chip';
import Typography from '@/components/typography';
import { borderRadius, media, spacing } from '@/styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import imageBertaSnow from '../../../../public/images/home/berta-snow.png';
import imageBerta from '../../../../public/images/home/berta.png';
import imageDrink from '../../../../public/images/home/drink.png';
import imageLights from '../../../../public/images/home/lights.png';
import imageMaiaSnow from '../../../../public/images/home/maia-snow.png';
import imageSun from '../../../../public/images/home/sun.png';
import imageWharf from '../../../../public/images/home/wharf.png';
import content from '../../content/content.json';

const ImageArray = [
  imageBertaSnow,
  imageBerta,
  imageDrink,
  imageLights,
  imageMaiaSnow,
  imageSun,
  imageWharf,
];

const PersonalCard = () => {
  const [image, setImage] = useState(ImageArray[0]);
  const [rotation, setRotation] = useState(0);

  const generateRotation = () => {
    const random = Math.floor(Math.random() * 8 - 5);
    setRotation(random);
  };

  const nextImage = () => {
    const index = ImageArray.indexOf(image);
    if (index === ImageArray.length - 1) {
      setImage(ImageArray[0]);
      generateRotation();
    } else {
      setImage(ImageArray[index + 1]);
      generateRotation();
    }
  };

  const prevImage = () => {
    const index = ImageArray.indexOf(image);
    if (index === 0) {
      setImage(ImageArray[ImageArray.length - 1]);
      generateRotation();
    } else {
      setImage(ImageArray[index - 1]);
      generateRotation();
    }
  };

  return (
    <Card>
      <Carrousel rotation={rotation}>
        <CarrouselButton
          data-type="prev"
          onClick={() => prevImage()}
          className="sliderButton"
        >
          <ChevronLeftIcon />
        </CarrouselButton>
        <ImageContainer className="imageContainer" rotation={rotation}>
          <Image
            src={image}
            alt={`Claudio Angrigiani's profile picture`}
            height={900}
            width={900}
            priority
          />
        </ImageContainer>
        <CarrouselButton
          data-type="next"
          onClick={() => nextImage()}
          className="sliderButton"
        >
          <ChevronRightIcon />
        </CarrouselButton>
        <IndicatorContainer>
          {ImageArray.map((i) => {
            return (
              <Indicator
                active={image === ImageArray[ImageArray.indexOf(i)]}
                key={ImageArray.indexOf(i)}
              />
            );
          })}
        </IndicatorContainer>
      </Carrousel>
      <TextContent>
        <Typography variant="heading-1" color="primary" as="h1">
          {content.home.title}
        </Typography>
        <Subtitle>
          <Typography variant="heading-2" color="secondary">
            {content.home.subtitle}
          </Typography>
          <Link href="/onefootprint.com" target="_blank">
            <Typography variant="heading-2" color="secondary">
              {content.home.cta}
            </Typography>
          </Link>
        </Subtitle>
        <Typography variant="body-2" color="secondary">
          {content.home.description}
        </Typography>
        <SocialLinks>
          <SocialChip
            name="linkedin"
            href="https://www.linkedin.com/in/claudioangrigiani/"
          />
          <SocialChip name="github" href="https://github.com/clodoan" />
          <SocialChip name="twitter" href="https://twitter.com/clodoan" />
          <SocialChip name="figma" href="https://www.figma.com/@clodito" />
        </SocialLinks>
      </TextContent>
    </Card>
  );
};

const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.background.primary};
    border-radius: ${borderRadius.large};
    padding: ${spacing[5]};
    margin: ${spacing[4]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${spacing[10]};
    z-index: 2;
    max-width: 100vw;

    a {
      text-decoration: none;
    }

    @media ${media.mobileL} {
      max-width: 912px;
      flex-direction: row;
    }
  `}
`;

const ImageContainer = styled(motion.div)<{ rotation: number }>`
  ${({ theme, rotation }) => css`
    border-radius: ${borderRadius.large};
    box-shadow: ${theme.shadow[2]};
    transform: rotate(${rotation}deg);
    overflow: hidden;
    height: 390px;
    min-width: 312px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `}
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${spacing[1]};
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${spacing[2]};
  flex-wrap: wrap;
  margin-top: ${spacing[4]};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${spacing[2]};
  padding: ${spacing[5]} ${spacing[4]} ${spacing[3]} ${spacing[4]};
`;

const CarrouselButton = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.border.secondary};
    border-radius: ${borderRadius.full};
    display: flex;
    padding: ${spacing[4]};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
    z-index: 2;

    &:hover {
      background-color: ${theme.background.secondary};
      border: 1px solid ${theme.border.primary};
    }

    svg path {
      fill: ${theme.text.secondary};
    }

    @media ${media.mobileL} {
      padding: ${spacing[2]};
    }
  `}
`;

const Carrousel = styled.div<{ rotation: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing[2]};
  position: relative;
`;

const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing[1]};
  position: absolute;
  bottom: calc(-1 * ${spacing[8]});
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Indicator = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    width: 8px;
    height: 8px;
    border-radius: ${borderRadius.full};
    background-color: ${active
      ? theme.background.tertiary
      : theme.background.secondary};
    transition: background-color 0.2s ease-in-out;
  `}
`;

export default PersonalCard;
