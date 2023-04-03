import Typography from '@/components/typography';
import { borderRadius, spacing } from '@/styles';
import styled from 'styled-components';
import { css } from 'styled-components';

import content from '../content/content.json';

export default function Home() {
  return (
    <Container>
      <Card>
        <Typography variant="heading-1" color="primary" as="h1">
          Heading 1
        </Typography>
        <Typography variant="heading-2" color="secondary">
          Heading 2
        </Typography>
        <Typography variant="heading-3" color="tertiary">
          Heading 3
        </Typography>
        <Typography variant="label-1">Label 1 </Typography>
        <Typography variant="label-2">Label 2 </Typography>
        <Typography variant="label-3">Label 3 </Typography>
        <Typography variant="body-1">Body 1 </Typography>
        <Typography variant="body-2">Body 2 </Typography>
        <Typography variant="body-3">Body 3 </Typography>
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
    padding: ${spacing[4]};
    margin: ${spacing[4]};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;
