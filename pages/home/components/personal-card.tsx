import SocialChip from '@/components/social-chip';
import Typography from '@/components/typography';
import { borderRadius, media, spacing } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import content from '../content/content.json';

const PersonalCard = () => {
  return (
    <Card>
      <ImageContainer>
        <Image
          src="/images/me-sun.png"
          alt="Claudio Angrigiani"
          height={900}
          width={900}
          priority
        />
      </ImageContainer>
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

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.small};
  overflow: hidden;
  max-height: 420px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.background.primary};
    border: 1px solid ${theme.border.primary};
    border-radius: ${borderRadius.large};
    padding: ${spacing[5]};
    margin: ${spacing[4]};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${spacing[2]};
    width: 95%;

    a {
      text-decoration: none;
    }

    @media ${media.mobileL} {
      width: 80%;
      max-width: 600px;
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

export default PersonalCard;
