import { borderRadius, media, spacing } from '@/styles';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import SliderButton from './components/slider-button';

type CarrouselProps = {
  images: StaticImageData[];
};

const Carrousel = ({ images }: CarrouselProps) => {
  const [rotation, setRotation] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random() * 10 - 5);
    setRotation(random);
  }, [count]);

  const nextImage = () => {
    if (images) {
      if (count === images?.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }
  };

  const prevImage = () => {
    if (images) {
      if (count === 0) {
        setCount(images?.length - 1);
      } else {
        setCount(count - 1);
      }
    }
  };

  return (
    <Container>
      <SliderButton onClick={() => prevImage()} type="prev" />
      <ImageContainer
        key={images[count].src}
        initial={{
          x: 0,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transform: `rotate(${rotation}deg)`,
        }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <StyledImage
          src={images[count] ? images[count].src : '/images/wharf.jpg'}
          alt={`Claudio Angrigiani's profile picture`}
          height={600}
          width={600}
          priority
        />
      </ImageContainer>
      <IndicatorContainer>
        {images?.map((i) => {
          return (
            <Indicator active={images[count] === i} key={images.indexOf(i)} />
          );
        })}
      </IndicatorContainer>
      <SliderButton onClick={() => nextImage()} type="next" />
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

const ImageContainer = styled(motion.div)`
  ${({ theme }) => css`
    border-radius: ${borderRadius.large};
    box-shadow: ${theme.shadow[2]};
    overflow: hidden;
    width: 240px;
    height: 280px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
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
