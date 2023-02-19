// import styled from '@emotion/styled';
import styled from '@emotion/styled';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { KeyOfColors, KeyOfTypography } from '~/styles/Theme';
import { theme } from '~/styles/Theme';

type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'strong' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: number;
  weight?: FontWeight;
  color?: KeyOfColors;
  variant?: KeyOfTypography;
}

const Text = ({
  as = 'span',
  size = 1.6,
  weight = 'normal',
  color = 'gray800',
  children,
  variant,
  ...rest
}: PropsWithChildren<TextProps>) => {
  return (
    <StyledText as={as} size={size} weight={weight} color={color} variant={variant} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;

type TextStyleProps = Pick<TextProps, 'size' | 'weight' | 'color' | 'variant'>;

const StyledText = styled('span')<TextStyleProps>`
  font-size: ${({ size }) => size}rem;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => theme.color[color ?? 'gray800']};

  ${({ variant }) => (variant === undefined ? '' : theme.typography[variant])}
`;
