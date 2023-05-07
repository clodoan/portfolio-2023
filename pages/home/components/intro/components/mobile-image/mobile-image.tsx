import { borderRadius } from '@/styles';
import { media } from '@/styles';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

type MobileImageProps = {
  image: StaticImageData;
};

const MobileImage = ({ image }: MobileImageProps) => {
  return (
    <Container>
      <StyledImage
        src={image}
        width={600}
        height={600}
        alt="Image of Claudio Angrigiani"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  border-radius: ${borderRadius.large};
  overflow: hidden;
  width: 100%;
  height: fit-content;

  @media ${media.mobile} {
    display: none;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default MobileImage;
