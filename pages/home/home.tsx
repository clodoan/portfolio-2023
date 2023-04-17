import SEO from '@/components/seo';
import { media, spacing } from '@/styles';
import styled from 'styled-components';

import PersonalCard from './components/personal-card';

export default function Home() {
  return (
    <>
      <SEO />
      <Aligner>
        <PersonalCard />
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
