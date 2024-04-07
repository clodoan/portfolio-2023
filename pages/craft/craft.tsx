import { Typography } from '@/components';
import { media } from '@/styles/media';
import MuxPlayer from '@mux/mux-player-react';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import data from './craft.json';

interface Video {
  id: string;
  playbackId: string;
  title: string;
  description: string;
  link?: string;
  blurHash?: string;
}

const Craft = () => {
  const [videos, setVideos] = useState<Video[]>(data);

  return (
    <Container>
      {videos.map((item) => (
        <VideoContainer key={item.id}>
          <CaptionContainer>
            <Typography variant="label-2">{item.title}</Typography>
          </CaptionContainer>
          <MuxPlayer
            // placeholder={item.blurHash}
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
  );
};

const VideoContainer = styled.div<{ key: string; children: React.ReactNode }>`
  border-radius: 8px;
  width: fit-content;
  height: auto;
  overflow: hidden;
  position: relative;
  isolation: isolate;

  mux-player {
    width: 100%;
    height: 100%;
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

const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacing[2]};
    padding: ${theme.spacing[2]};
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: masonry;

    @media (${media.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (${media.desktopL}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export default Craft;
