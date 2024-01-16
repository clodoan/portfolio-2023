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
    | 'label-1'
    | 'label-2'
    | 'label-3';
  color?: 'primary' | 'secondary' | 'tertiary';
  children: string | React.ReactNode;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'label' | 'div' | 'li' | 'a';
};

const Typography = ({
  children,
  variant,
  color = 'primary',
  as,
}: TypographyProps) => {
  return (
    <TypographyContainer variant={variant} color={color} as={as}>
      {children}
    </TypographyContainer>
  );
};

const handleFamily = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'heading-1':
      return typographyBase.fontFamily.heading;
    case 'heading-2':
      return typographyBase.fontFamily.heading;
    case 'heading-3':
      return typographyBase.fontFamily.heading;
    case 'body-1':
      return typographyBase.fontFamily.body;
    case 'body-2':
      return typographyBase.fontFamily.body;
    case 'body-3':
      return typographyBase.fontFamily.body;
    case 'label-1':
      return typographyBase.fontFamily.body;
    case 'label-2':
      return typographyBase.fontFamily.body;
    case 'label-3':
      return typographyBase.fontFamily.body;
    default:
      return typographyBase.fontFamily.body;
  }
};

const handleColor = (color: TypographyProps['color'], theme: Theme) => {
  switch (color) {
    case 'primary':
      return theme.colors.text.primary;
    case 'secondary':
      return theme.colors.text.secondary;
    case 'tertiary':
      return theme.colors.text.tertiary;
    default:
      return theme.colors.text.primary;
  }
};

const handleSize = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'heading-1':
      return typographyBase.fontSize[4];
    case 'heading-2':
      return typographyBase.fontSize[5];
    case 'heading-3':
      return typographyBase.fontSize[6];
    case 'body-1':
      return typographyBase.fontSize[1];
    case 'body-2':
      return typographyBase.fontSize[2];
    case 'body-3':
      return typographyBase.fontSize[3];
    case 'label-1':
      return typographyBase.fontSize[1];
    case 'label-2':
      return typographyBase.fontSize[2];
    case 'label-3':
      return typographyBase.fontSize[3];
    default:
      return typographyBase.fontSize[1];
  }
};

const handleWeight = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'heading-1':
      return typographyBase.fontWeight.heading.bold;
    case 'heading-2':
      return typographyBase.fontWeight.heading.bold;
    case 'heading-3':
      return typographyBase.fontWeight.heading.bold;
    case 'body-1':
      return typographyBase.fontWeight.body.regular;
    case 'body-2':
      return typographyBase.fontWeight.body.regular;
    case 'body-3':
      return typographyBase.fontWeight.body.regular;
    case 'label-1':
      return typographyBase.fontWeight.body.semibold;
    case 'label-2':
      return typographyBase.fontWeight.body.semibold;
    case 'label-3':
      return typographyBase.fontWeight.body.semibold;
    default:
      return typographyBase.fontWeight.body.regular;
  }
};

const TypographyContainer = styled.p<{
  variant: TypographyProps['variant'];
  color: TypographyProps['color'];
}>`
  ${({ variant, color, theme }) => css`
      font-family: ${handleFamily(variant)}};
      font-size: ${handleSize(variant)};
      color: ${handleColor(color, theme)};
      font-weight: ${handleWeight(variant)};
      line-height: 1.5;
  `}
`;

export default Typography;
