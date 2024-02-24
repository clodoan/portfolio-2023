import Flex from '@/components/flex';
import Typography from '@/components/typography';
import React from 'react';
import styled, { css } from 'styled-components';

type RoleAndPlace = {
  role?: string;
  from?: string;
  to?: string;
};

const RoleAndPlace = ({ role, from, to }: RoleAndPlace) => {
  return (
    <Flex
      direction="row"
      width="100%"
      justifyContent="space-between"
      alignItems="end"
    >
      <RoleWrapper>
        <Typography variant="body-1" color="secondary">
          {role}
        </Typography>
      </RoleWrapper>
      <DashedLine />
      <DateWrapper>
        <Typography variant="body-1" color="secondary">
          {from} – {to}
        </Typography>
      </DateWrapper>
    </Flex>
  );
};

const RoleWrapper = styled.div`
  flex-shrink: 0;
`;

const DateWrapper = styled.div`
  flex-shrink: 0;
`;

const DashedLine = styled.span`
  ${({ theme }) => css`
    content: '';
    position: relative;
    display: block;
    flex-grow: 1;
    height: 100%;

    &::after {
      content: '';
      position: absolute;
      width: calc(100% - ${theme.spacing[4]});
      height: 1px;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 1px dashed ${theme.colors.border.tertiary};
    }
  `}
`;

export default RoleAndPlace;
