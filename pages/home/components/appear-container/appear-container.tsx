import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

type AppearContainerProps = {
  children: React.ReactNode;
  isVisible: boolean | undefined;
  area: string;
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

const AppearContainer = ({
  children,
  isVisible,
  area,
}: AppearContainerProps) => {
  return (
    <Container
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerTextAppearDisappearVariants}
    >
      <AnimatePresence>
        {isVisible && (
          <GridAssigner
            area={area}
            variants={textAppearDisappearVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            id={area}
          >
            {children}
          </GridAssigner>
        )}
      </AnimatePresence>
    </Container>
  );
};

const GridAssigner = styled(motion.div)<{ area: string }>`
  ${({ area }) => css`
    grid-area: ${area};
    max-width: 100%;
  `}
`;

const Container = styled(motion.div)`
  overflow: hidden;
`;

export default AppearContainer;
