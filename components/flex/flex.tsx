import type { BorderRadius } from '@/styles/border/border-types';
import { Spacing } from '@/styles/spacing';
import styled, { CSSProperties, css } from 'styled-components';

type FlexDirectionProperty = CSSProperties['flexDirection'];

interface FlexProps {
  direction?: FlexDirectionProperty;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  flex?: CSSProperties['flex'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margin?: keyof Spacing;
  padding?: keyof Spacing;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: keyof BorderRadius;
  border?: CSSProperties['border'];
  boxShadow?: CSSProperties['boxShadow'];
  position?: CSSProperties['position'];
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
  zIndex?: CSSProperties['zIndex'];
  cursor?: CSSProperties['cursor'];
  overflow?: CSSProperties['overflow'];
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];
  textAlign?: CSSProperties['textAlign'];
  gap?: keyof Spacing;
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
}

const Flex = styled.div<FlexProps>`
  ${({
    theme,
    direction,
    justifyContent,
    alignItems,
    flexWrap,
    flex,
    width,
    height,
    margin,
    padding,
    borderRadius,
    backgroundColor,
    border,
    boxShadow,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    cursor,
    overflow,
    overflowX,
    overflowY,
    textAlign,
    gap,
    maxWidth,
    maxHeight,
  }) => css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
    flex-wrap: ${flexWrap || 'nowrap'};
    flex: ${flex || '0 1 auto'};
    width: ${width || 'undefined'};
    height: ${height || 'undefined'};
    margin: ${margin ? theme.spacing[margin] : 'undefined'};
    padding: ${padding ? theme.spacing[padding] : 'undefined'}
    border-radius: ${
      borderRadius ? theme.border.radius[borderRadius] : 'undefined'
    };
    background-color: ${backgroundColor || 'undefined'};
    border: ${border || 'undefined'};
    box-shadow: ${boxShadow || 'undefined'};
    position: ${position || 'undefined'};
    top: ${top ? top : 'undefined'};
    left: ${left ? left : 'undefined'};
    right: ${right ? right : 'undefined'};
    bottom: ${bottom ? bottom : 'undefined'};
    z-index: ${zIndex ? zIndex : 'undefined'};
    cursor: ${cursor ? cursor : 'undefined'};
    overflow: ${overflow ? overflow : 'undefined'};
    overflow-x: ${overflowX ? overflowX : 'undefined'};
    overflow-y: ${overflowY ? overflowY : 'undefined'};
    text-align: ${textAlign ? textAlign : 'undefined'};
    gap: ${gap ? theme.spacing[gap] : 'undefined'};
    max-width: ${maxWidth ? maxWidth : 'undefined'};
    max-height: ${maxHeight ? maxHeight : 'undefined'};
  `}
`;

export default Flex;
