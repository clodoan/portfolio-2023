import Typography from '@/components/typography';
import { borderRadius, media, spacing } from '@/styles';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

import content from '../../../../content/content.json';
import SocialChip from '../social-chip';

const TextContent = () => {
  return (
    <Container>
      <Typography variant="heading-1" color="primary" as="h1">
        {content.home.title}
      </Typography>
      <Subtitle>
        <Typography variant="heading-2" color="secondary">
          {content.home.subtitle} {content.home.cta}
        </Typography>
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
    </Container>
  );
};

const Container = styled.div`
  position: relative;
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

export default TextContent;
