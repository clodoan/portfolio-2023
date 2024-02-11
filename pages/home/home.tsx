import Flex from '@/components/flex';
import Typography from '@/components/typography';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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
    <Container alignItems="center" justifyContent="center" overflow="hidden">
      <Grid layout>
        <GridAssigner area="name">
          <Typography variant="heading-1">Claudio Angrigiani</Typography>
        </GridAssigner>
        <Typography variant="body-2">
          Crafting delightful software from design to code.
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
                  'Mollit nulla labore nulla non magna aute ut dolor incididunt
                  irure labore. Culpa incididunt duis tempor ullamco pariatur
                  qui irure. Minim proident eiusmod non consequat aliquip ipsum
                  pariatur do aliquip excepteur nulla. Veniam exercitation
                  deserunt qui sit. Aute duis proident dolor ullamco irure.',
                </Typography>
              </GridAssigner>
            )}
          </AnimatePresence>
        </AppearContainer>
      </Grid>
    </Container>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: var(--max-content-width-desktop) 24px;
  grid-template-areas:
    'name name'
    'description description-more'
    'description-extra description-more';
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
