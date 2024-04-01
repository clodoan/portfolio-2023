import MuxPlayer from '@mux/mux-player-react';
import React from 'react';
import styled, { css } from 'styled-components';

import data from './craft.json';

const Craft = () => {
  return (
    <Container>
      {data.map((item) => (
        <Frame>
          <VideoContainer>
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
              }}
            />
          </VideoContainer>
        </Frame>
      ))}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.spacing[2]};
  `}
`;

const VideoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 7px;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
  `}
`;

const Frame = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[1]};
    background-color: ${theme.colors.background.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 9px;
  `}
`;

export default Craft;
