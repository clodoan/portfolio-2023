import styled, { css } from 'styled-components';

import { DASH_WIDTH } from '../../pages/constants';

type DashedDividerProps = {
  area?: string;
};

const DashedDivider = styled.div<DashedDividerProps>`
  ${({ theme, area }) => css`
    content: '';
    width: 100vw;
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
    grid-area: ${area};
    transform: translateX(-50%);
    border-bottom: 1px dashed ${theme.colors.border.tertiary};
  `}
`;

export default DashedDivider;
