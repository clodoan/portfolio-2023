import Flex from '@/components/flex';
import Footer from '@/components/footer';
import Typography from '@/components/typography';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import homeContent from './home.content';
import ShowMoreButton from './show-more-button';

const Home = () => {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);

  const handleShowMoreClick = () => {
    setPersonalInfoOpen(!personalInfoOpen);
  };

  const textAppearDisappearVariants = {
    hidden: { opacity: 0, y: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',

      transition: {
        duration: 0.3,
        when: 'beforeChildren',
      },
    },
    exit: { opacity: 0, filter: 'blur(10px)' },
  };

  const containerTextAppearDisappearVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',

      transition: {
        duration: 0.3,
        when: 'beforeChildren',
      },
    },
    exit: { opacity: 0, y: 0 },
  };

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      direction="column"
    >
      <Grid layout>
        <GridAssigner area="name">
          <Typography variant="heading-1">{homeContent.title}</Typography>
        </GridAssigner>
        <Typography variant="body-2">
          {homeContent.about.description}
        </Typography>
        <ShowMoreButton
          open={personalInfoOpen}
          onClick={handleShowMoreClick}
          area="description-more"
        />
        <AppearContainer
          initial="hidden"
          animate={personalInfoOpen ? 'visible' : 'hidden'}
          variants={containerTextAppearDisappearVariants}
        >
          <AnimatePresence>
            {personalInfoOpen && (
              <GridAssigner
                area="description-extra"
                variants={textAppearDisappearVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                id="description-extra"
              >
                <Typography variant="body-2">
                  {homeContent.about.extra}
                </Typography>
              </GridAssigner>
            )}
          </AnimatePresence>
        </AppearContainer>
      </Grid>
      <Footer />
    </Container>
  );
};

const Grid = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: var(--max-content-width-desktop) 24px;
    grid-column-gap: ${theme.spacing[3]};
    grid-template-areas:
      'name name'
      'description description-more'
      'description-extra description-more';
  `}
`;

const GridAssigner = styled(motion.div)<{ area: string }>`
  ${({ area }) => css`
    grid-area: ${area};
    max-width: 100%;
  `}
`;

const Container = styled(Flex)`
  min-height: 100vh;
`;

const AppearContainer = styled(motion.div)`
  overflow: hidden;
`;

export default Home;
