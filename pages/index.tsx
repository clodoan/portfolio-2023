import SEO from '@/components/seo';
import SocialChip from '@/components/social-chip';
import Typography from '@/components/typography';
import { borderRadius, spacing } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { css } from 'styled-components';

import content from '../content/content.json';

export default function Home() {
  return (
    <>
      <SEO />
      <Container>
        <Card>
          <ImageContainer>
            <Image
              src="/images/me-sun.png"
              alt="Claudio Angrigiani"
              height={900}
              width={900}
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
              <SocialChip name="read-cv" href="https://read.cv/claudio" />
            </SocialLinks>
          </TextContent>
        </Card>
      </Container>
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  `}
`;

const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${borderRadius.small};
    overflow: hidden;
    max-height: 400px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `}
`;

const Card = styled.div`
  ${({ theme }) => css`
    width: 80%;
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
    max-width: 720px;

    a {
      text-decoration: none;
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
