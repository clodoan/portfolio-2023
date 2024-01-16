import Flex from '@/components/flex';
import Typography from '@/components/typography';
import React from 'react';

const Home = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex maxWidth="400px">
        <Typography variant="body-1">
          I am Claudio, a Designer & Engineer from Argentina living in
          Washington D.C. I love creating software that not only works
          seamlessly but also enhances our daily experiences through attention
          and care for details.
        </Typography>
      </Flex>
    </Flex>
  );
};

export default Home;
