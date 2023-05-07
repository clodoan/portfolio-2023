import { borderRadius, media, spacing } from '@/styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

type CarrouselProps = {
  images: StaticImageData[];
};

const Carrousel = ({ images }: CarrouselProps) => {
  const [rotation, setRotation] = useState(0);
  const [count, setCount] = useState(1);

  const generateRotation = () => {
    const random = Math.floor(Math.random() * 8 - 5);
    setRotation(random);
  };

  const nextImage = () => {
    if (count === images.length - 1) {
      setCount(0);
      generateRotation();
    } else {
      setCount(count + 1);
      generateRotation();
    }
  };

  const prevImage = () => {
    if (count === 0) {
      setCount(images.length - 1);
      generateRotation();
    } else {
      setCount(count - 1);
      generateRotation();
    }
  };

  return (
    <Container>
      <CarrouselButton
        data-type="prev"
        onClick={() => prevImage()}
        className="sliderButton"
      >
        <ChevronLeftIcon />
      </CarrouselButton>
      <ImageArea rotation={rotation}>
        <AnimatePresence>
          <ImageContainer
            className="imageContainer"
            key={images[count].src}
            initial={{
              x: 0,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <StyledImage
              src={images[count]}
              alt={`Claudio Angrigiani's profile picture`}
              height={600}
              width={600}
              priority
            />
          </ImageContainer>
        </AnimatePresence>
      </ImageArea>
      <CarrouselButton
        data-type="next"
        onClick={() => nextImage()}
        className="sliderButton"
      >
        <ChevronRightIcon />
      </CarrouselButton>
      <IndicatorContainer>
        {images.map((i) => {
          return (
            <Indicator active={images[count] === i} key={images.indexOf(i)} />
          );
        })}
      </IndicatorContainer>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing[2]};
  position: relative;

  @media ${media.mobile} {
    display: flex;
  }
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

    @media ${media.mobile} {
      padding: ${spacing[2]};
    }
  `}
`;

const IndicatorContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing[1]};
  position: absolute;
  bottom: calc(-1 * ${spacing[8]});
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media ${media.mobile} {
    display: flex;
  }
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

const ImageArea = styled.div<{ rotation: number }>`
  ${({ rotation }) => css`
    position: relative;
    overflow: hidden;
    height: 390px;
    min-width: 312px;
    transform: rotate(${rotation}deg);
    border-radius: ${borderRadius.large};
  `}
`;

const ImageContainer = styled(motion.div)`
  ${({ theme }) => css`
    border-radius: ${borderRadius.large};
    box-shadow: ${theme.shadow[2]};
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    position: absolute;
  `}
`;

const StyledImage = styled(Image)`
  border-radius: ${borderRadius.large};
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Carrousel;
