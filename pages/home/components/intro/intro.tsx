import Typography from '@/components/typography';
import SocialChip from '@/pages/home/components/intro/components/social-chip';
import { borderRadius, media, spacing } from '@/styles';
import Link from 'next/link';
import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import imageBertaSnow from '../../../../public/images/home/berta-snow.png';
import imageBerta from '../../../../public/images/home/berta.png';
import imageDrink from '../../../../public/images/home/drink.png';
import imageLights from '../../../../public/images/home/lights.png';
import imageMaiaSnow from '../../../../public/images/home/maia-snow.png';
import imageSun from '../../../../public/images/home/sun.png';
import imageWharf from '../../../../public/images/home/wharf.png';
import content from '../../content/content.json';
import Carrousel from './components/carrousel';

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
    <Card>
      <Carrousel images={ImageArray} />
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
    margin: ${spacing[4]} ${spacing[4]} ${spacing[10]} ${spacing[4]};
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

    @media ${media.mobile} {
      max-width: 912px;
      flex-direction: row;
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
  padding: ${spacing[2]};

  @media ${media.mobile} {
    padding: ${spacing[5]} ${spacing[4]} ${spacing[3]} ${spacing[4]};
  }
`;

export default Intro;
