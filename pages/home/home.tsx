import Flex from '@/components/flex';
import Typography from '@/components/typography';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import ShowMoreButton from './show-more-button';

const Home = () => {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);

  const handleShowMoreClick = () => {
    setPersonalInfoOpen(!personalInfoOpen);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      width="600px"
    >
      <Grid>
        <GridAssigner area="name" as="div">
          <Typography variant="heading-1">Claudio Angrigiani</Typography>
        </GridAssigner>
        <Flex direction="row" gap={1}>
          <Typography variant="body-2">
            Crafting delightful software from design to code.
          </Typography>
          <ShowMoreButton
            open={personalInfoOpen}
            onClick={handleShowMoreClick}
          />
        </Flex>
        {personalInfoOpen && (
          <Typography variant="body-2">
            Mollit nulla labore nulla non magna aute ut dolor incididunt irure
            labore. Culpa incididunt duis tempor ullamco pariatur qui irure.
            Minim proident eiusmod non consequat aliquip ipsum pariatur do
            aliquip excepteur nulla. Veniam exercitation deserunt qui sit. Aute
            duis proident dolor ullamco irure.
          </Typography>
        )}
      </Grid>
    </Flex>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  grid-template-areas:
    'name name'
    'description description-more';
`;

const GridAssigner = styled.div<{ area: string }>`
  ${({ area }) => css`
    grid-area: ${area};
  `}
`;

export default Home;
