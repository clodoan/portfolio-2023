import { typographyBase } from '@/styles';
import type { Theme } from '@/styles/themes';
import styled, { css } from 'styled-components';

type TypographyProps = {
  variant:
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'body-1'
    | 'body-2'
    | 'body-3'
    | 'body-4'
    | 'label-1'
    | 'label-2'
    | 'label-3'
    | 'label-4';
  color?: 'primary' | 'secondary' | 'tertiary';
  serif?: boolean;
  children: string | React.ReactNode;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'label' | 'div' | 'li' | 'a';
};

const Typography = ({
  children,
  variant,
  color = 'primary',
  serif,
  as,
}: TypographyProps) => {
  return (
    <TypographyContainer variant={variant} color={color} serif={serif} as={as}>
      {children}
    </TypographyContainer>
  );
};

const handleFamily = (variant: TypographyProps['variant'], serif?: boolean) => {
  if (serif === true) {
    return typographyBase.fontFamily.serif;
  } else if (['heading-1', 'heading-2', 'heading-3'].includes(variant)) {
    return typographyBase.fontFamily.heading;
  } else {
    return typographyBase.fontFamily.body;
  }
};

const handleColor = (
  color: TypographyProps['color'] = 'primary',
  theme: Theme,
) => {
  return theme.colors.text[color] || theme.colors.text.primary;
};

const handleSize = (variant: TypographyProps['variant']) => {
  const defaultSize = typographyBase.fontSize[1];
  const sizeMap: { [key in TypographyProps['variant']]?: string } = {
    'heading-1': typographyBase.fontSize[4],
    'heading-2': typographyBase.fontSize[5],
    'heading-3': typographyBase.fontSize[6],
    'body-1': typographyBase.fontSize[1],
    'body-2': typographyBase.fontSize[2],
    'body-3': typographyBase.fontSize[3],
    'label-1': typographyBase.fontSize[1],
    'label-2': typographyBase.fontSize[2],
    'label-3': typographyBase.fontSize[3],
  };
  return sizeMap[variant] || defaultSize;
};

const handleWeight = (variant: TypographyProps['variant']) => {
  if (
    [
      'heading-1',
      'heading-2',
      'heading-3',
      'label-1',
      'label-2',
      'label-3',
    ].includes(variant)
  ) {
    return typographyBase.fontWeight.semibold;
  }
  return typographyBase.fontWeight.regular;
};

// @ts-ignore
const TypographyContainer = styled('p').attrs(({ as }) => ({
  as,
}))<{
  variant: TypographyProps['variant'];
  color: TypographyProps['color'];
  serif?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}>`
  ${({ variant, color, serif, theme }) => css`
    font-family: ${handleFamily(variant, serif)};
    font-size: ${handleSize(variant)};
    color: ${handleColor(color, theme)};
    font-weight: ${serif ? 700 : handleWeight(variant)};
    font-style: ${serif ? 'italic' : undefined};
    line-height: 1.5;
  `}
`;
export default Typography;
