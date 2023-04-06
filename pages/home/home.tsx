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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: ${spacing[10]};

  @media ${media.mobileL} {
    justify-content: center;
  }
`;
