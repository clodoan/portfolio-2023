import Typography from '@/components/typography/typography';
import { spacing } from '@/styles';
import React from 'react';
import styled, { css } from 'styled-components';

type RowProps = {
  type: 'work' | 'education';
  position?: string;
  degree?: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
};

const Row = ({
  type,
  position,
  degree,
  institution,
  dateStart,
  dateEnd,
}: RowProps) => {
  return type === 'work' ? (
    <Container>
      <Institution variant="body-2">{institution}</Institution>
      <Right>
        <Position variant="label-2">{position}</Position>
        <Date>
          <DateStart variant="label-2">{dateStart}</DateStart>
          <DateEnd variant="label-2">{dateEnd}</DateEnd>
        </Date>
      </Right>
    </Container>
  ) : (
    <></>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing[2]};
`;

const Title = styled(Typography)``;

const Position = styled(Typography)``;

const Institution = styled(Typography)``;

const DateStart = styled(Typography)``;

const DateEnd = styled(Typography)``;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${spacing[1]};
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Row;
