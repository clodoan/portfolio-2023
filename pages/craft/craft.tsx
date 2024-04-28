import { Layout, Typography } from '@/components';
import appearVariants from '@/components/appear-variants';
import { media } from '@/styles/media';
import MuxPlayer from '@mux/mux-player-react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import data from './craft.json';

const VIDEO_WIDTH = 400;
const VIDEO_HEIGHT = 225;

interface Video {
  id: string;
  playbackId: string;
  title: string;
  description: string;
  link?: string;
}

const Craft = () => {
  const [videos, setVideos] = useState<Video[]>(data);

  return (
    <Layout>
      <Container
        variants={appearVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 1,
        }}
      >
        {videos.map((item) => (
          <VideoContainer key={item.id}>
            <CaptionContainer>
              <Typography variant="label-2">{item.title}</Typography>
            </CaptionContainer>
            <MuxPlayer
              playbackId={item.playbackId}
              metadata={{
                video_title: item.title,
              }}
              autoPlay
              loop
              muted
              playsInline
            />
          </VideoContainer>
        ))}
      </Container>
    </Layout>
  );
};

const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    max-width: 100%;
    grid-gap: ${theme.spacing[2]};
    padding: ${theme.spacing[2]};
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(${VIDEO_HEIGHT}px, auto));

    @media (${media.mobile}) {
      grid-template-columns: repeat(2, minmax(0, ${VIDEO_WIDTH}px));
    }

    @media (${media.desktop}) {
      margin: auto;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (${media.desktopL}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

const VideoContainer = styled.div<{
  children: React.ReactNode;
}>`
  position: relative;
  isolation: isolate;
  border-radius: 6px;
  overflow: hidden;

  mux-player {
    overflow: hidden;
    aspect-ratio: 16 / 9;
    min-height: 100%;
    --media-object-fit: cover;
    --media-object-position: center;
    --controls: none;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.4) 0%,
        transparent 40%,
        transparent 100%
      );
    }
  }
`;

const CaptionContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${theme.spacing[4]} ${theme.spacing[3]};

    p {
      color: #fff;
    }
  `}
`;

export default Craft;
