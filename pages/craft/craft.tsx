import { Flex, Typography } from '@/components';
import { media } from '@/styles/media';
import MuxPlayer from '@mux/mux-player-react/lazy';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import data from './craft.json';

interface Video {
  id: string;
  playbackId: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  blurHash?: string;
}

interface GroupedVideos {
  date: Date;
  videos: Video[];
}

const Craft = () => {
  const [videos, setVideos] = useState<Video[]>(data);
  const [groupedByMonth, setGroupedByMonth] = useState<GroupedVideos[]>([]);

  useEffect(() => {
    const grouped = videos.reduce((acc: GroupedVideos[], video) => {
      const date = parseISO(video.date);
      const monthYearKey = format(date, 'yyyy-MM');
      const existingGroup = acc.find(
        (group) => format(group.date, 'yyyy-MM') === monthYearKey,
      );
      if (existingGroup) {
        existingGroup.videos.push(video);
      } else {
        acc.push({
          date: date,
          videos: [video],
        });
      }
      return acc;
    }, []);

    setGroupedByMonth(grouped);
  }, [videos]);

  return (
    <Container>
      <Title direction="column" gap={2} width="100%" maxWidth="720px">
        <Typography variant="heading-2">Scraps</Typography>
        <Typography variant="body-3" color="secondary">
          A pretty random collection of work from the crafting process.
        </Typography>
      </Title>
      {groupedByMonth.map((group) => (
        <Flex key={format(group.date, 'yyyy-MM')} direction="row" gap={5}>
          <Date>
            <Typography variant="body-2" color="secondary">
              {format(group.date, 'MMM yyyy')}
            </Typography>
          </Date>
          <Flex direction="column" gap={5}>
            {group.videos.map((item) => (
              <Flex key={item.id} direction="column" gap={5}>
                <Flex direction="column" gap={1}>
                  <Typography variant="label-2">{item.title}</Typography>
                  <Typography variant="body-2">{item.description}</Typography>
                </Flex>
                <VideoContainer>
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
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Container>
  );
};

const Title = styled(Flex)`
  text-align: center;
  align-items: center;
`;

const Date = styled(Flex)`
  ${({ theme }) => css`
    flex: 0;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: sticky;
    top: ${theme.spacing[3]};
  `}
`;

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[11]};
    max-width: 720px;
    margin: 0 auto;
    padding: ${theme.spacing[11]} 0;
    align-items: center; /* Center the main content horizontally */
  `}
`;

const VideoContainer = styled.div`
  border-radius: 8px;
  height: auto;
  overflow: hidden;
  position: relative;
  isolation: isolate;

  mux-player {
    min-width: 100%;
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

export default Craft;
