import Flex from '@/components/flex';
import Footer from '@/components/footer';
import Typography from '@/components/typography';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { Fragment, useMemo, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import media from 'styled-media-query';

import { content } from '../../utils/content/home.content';
import Role from './components/work-timeline/role';

enum Sections {
  ABOUT = 'about',
  WORK = 'work',
  PROJECTS = 'projects',
}

function Home() {
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      direction="column"
    >
      <Flex direction="column" marginBottom={11}>
        <Typography variant="label-2">{content.title}</Typography>
        <Typography variant="label-2" color="secondary">
          {content.work[0].roles[0].title}
        </Typography>
      </Flex>
      <Flex marginBottom={11}>
        <Typography variant="body-2" color="secondary">
          {content.about}
        </Typography>
      </Flex>
      <Flex gap={2} direction="column" width="100%">
        {content.work.map((workPlace, index) => (
          <Flex
            key={index}
            direction="column"
            gap={1}
            marginTop={2}
            width="100%"
          >
            {workPlace.companyWeb ? (
              <StyledLink href={workPlace.companyWeb} target="_blank">
                <Typography variant="label-1">{workPlace.company}</Typography>
                <ArrowTopRightIcon />
              </StyledLink>
            ) : (
              <Typography variant="label-1">{workPlace.company}</Typography>
            )}
            {workPlace.roles.map((role, roleIndex) => (
              <Role
                key={roleIndex}
                role={role.title}
                from={role.from}
                to={role.to}
              />
            ))}
          </Flex>
        ))}
      </Flex>
      <Footer />
    </Container>
  );
}

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[1]};
    color: ${theme.colors.link.default};
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${theme.colors.link.hover};

        p {
          color: ${theme.colors.link.hover};
        }
      }
    }
  `}
`;

const Container = styled(Flex)`
  ${({ theme }) => css`
    min-height: 100vh;
    max-width: 580px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[6]};

    & > * {
      width: 100%;
    }
  `}
`;

export default Home;
