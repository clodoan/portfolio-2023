import Typography from '@/components/typography';
import { borderRadius, spacing } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { css } from 'styled-components';

import content from '../content/content.json';

export default function Home() {
  return (
    <Container>
      <Card>
        <Typography variant="heading-1" color="primary" as="h1">
          {content.home.title}
        </Typography>
        <Subtitle>
          <Typography variant="heading-2" color="secondary">
            {content.home.subtitle}
          </Typography>
          <Link href="/onefootprint.com" target="_blank">
            <Typography variant="heading-2" color="secondary">
              {content.home.cta}
            </Typography>
          </Link>
        </Subtitle>
        <Typography variant="body-2" color="secondary">
          {content.home.description}
        </Typography>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background.primary};
  `}
`;

const Card = styled.div`
  ${({ theme }) => css`
    width: 80%;
    background-color: ${theme.background.primary};
    border: 1px solid ${theme.border.primary};
    border-radius: ${borderRadius.medium};
    padding: ${spacing[5]} ${spacing[6]};
    margin: ${spacing[4]};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${spacing[2]};

    a {
      text-decoration: none;
    }
  `}
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${spacing[1]};
`;
