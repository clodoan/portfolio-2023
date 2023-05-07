import SEO from '@/components/seo';
import styled from 'styled-components';

import Intro from './components/intro';

export default function Home() {
  return (
    <>
      <SEO />
      <Aligner>
        <Intro />
      </Aligner>
    </>
  );
}

const Aligner = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
