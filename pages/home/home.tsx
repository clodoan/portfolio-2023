import DashedDivider from '@/components/dashed-divider/dashed-divider';
import Flex from '@/components/flex';
import Footer from '@/components/footer';
import Typography from '@/components/typography';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { content } from '../../utils/content/home.content';
import AppearContainer from './components/appear-container';
import ShowMoreDesktopButton from './components/show-more-desktop-button';
import ShowMoreMobileButton from './components/show-more-mobile-button/show-more-mobile-button';
import Role from './components/work-timeline/role';

enum Sections {
  ABOUT = 'about',
  WORK = 'work',
  PROJECTS = 'projects',
}

const Home = () => {
  const [sectionStates, setSectionStates] = useState([
    { id: 1, section: Sections.ABOUT, isOpen: false },
    { id: 2, section: Sections.WORK, isOpen: false },
    { id: 3, section: Sections.PROJECTS, isOpen: false },
  ]);

  const handleShowMore = (sectionName: string) => {
    setSectionStates(
      sectionStates.map((section) =>
        section.section === sectionName
          ? { ...section, isOpen: !section.isOpen }
          : section,
      ),
    );
  };

  const findSectionState = (sectionName: Sections) =>
    sectionStates.find((section) => section.section === sectionName);

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      direction="column"
    >
      <Grid layout>
        <GridAssigner area="name">
          <Typography variant="heading-1">{content.title}</Typography>
        </GridAssigner>
        <Fragment>
          <Typography variant="body-2">{content.about.description}</Typography>
          <ShowMoreDesktopButton
            open={findSectionState(Sections.ABOUT)?.isOpen ?? false}
            onClick={() => handleShowMore(Sections.ABOUT)}
            area="description-more"
          />
          <ShowMoreMobileButton
            open={findSectionState(Sections.ABOUT)?.isOpen ?? false}
            onClick={() => handleShowMore(Sections.ABOUT)}
            showMoreText="Show more about me"
            showLessText="Show less about me"
          />
          <AppearContainer
            isVisible={findSectionState(Sections.ABOUT)?.isOpen}
            area="description-extra"
          >
            <Flex paddingBottom={2}>
              <Typography variant="body-2" color="tertiary">
                {content.about.extra}
              </Typography>
            </Flex>
          </AppearContainer>
        </Fragment>
        <Fragment>
          <GridAssigner area="work">
            <Flex direction="row" gap={1}>
              <Typography variant="label-2" color="secondary">
                {content.work[0].roles[0].title}
              </Typography>
              <Typography variant="body-2" color="secondary">
                at
              </Typography>
              <Typography variant="label-2" color="secondary">
                {content.work[0].company}
              </Typography>
            </Flex>
          </GridAssigner>
          <ShowMoreDesktopButton
            open={findSectionState(Sections.WORK)?.isOpen ?? false}
            onClick={() => handleShowMore(Sections.WORK)}
            area="work-more"
          />
          <ShowMoreMobileButton
            open={findSectionState(Sections.WORK)?.isOpen ?? false}
            onClick={() => handleShowMore(Sections.WORK)}
            showMoreText="Show more work experience"
            showLessText="Show less work experience"
          />
          <AppearContainer
            isVisible={findSectionState(Sections.WORK)?.isOpen ?? false}
            area="work-extra"
          >
            <GridAssigner area="work-extra">
              {content.work.map((workPlace, index) => (
                <Flex key={index} direction="column" gap={1} marginTop={2}>
                  <Typography variant="label-1">{workPlace.company}</Typography>
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
            </GridAssigner>
          </AppearContainer>
        </Fragment>
      </Grid>
      <Footer />
    </Container>
  );
};

const Grid = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacing[3]};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: var(--max-content-width-desktop) 24px;
      grid-template-rows: auto;
      grid-column-gap: ${theme.spacing[3]};
      grid-template-areas:
        'name name'
        'description description-more'
        'description-extra description-more'
        'work work-more'
        'work-extra work-extra';
    `}
  `}
`;

const Container = styled(Flex)`
  min-height: 100vh;
`;

const GridAssigner = styled(motion.div)<{ area: string }>`
  ${({ area }) => css`
    grid-area: ${area};
    max-width: 100%;
  `}
`;

export default Home;
