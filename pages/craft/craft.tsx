import { Typography } from '@/components';
import { media } from '@/styles/media';
import MuxPlayer from '@mux/mux-player-react';
import React from 'react';
import styled, { css } from 'styled-components';

import data from './craft.json';

const Craft = () => {
  return (
    <Container>
      {data.map((item) => (
        <VideoContainer key={item.id}>
          <CaptionContainer>
            <Typography variant="body-2">{item.title}</Typography>
          </CaptionContainer>
          <MuxPlayer
            key={item.id}
            playbackId={item.playbackId}
            metadata={{
              video_title: 'Dialog overflow',
            }}
            autoPlay
            loop
            muted
            playsInline
            style={{
              pointerEvents: 'none',
              height: '100%',
              width: '100%',
            }}
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
    --media-object-fit: cover;
    --media-object-position: center;
    --controls: none;
  }
`;

const CaptionContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, black 0%, transparent 100%);
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
