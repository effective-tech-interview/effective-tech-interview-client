import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ComponentProps, PropsWithChildren } from 'react';

import type { KeyOfColors } from '~/styles/Theme';
import { theme } from '~/styles/Theme';

interface ButtonProps extends ComponentProps<'button'> {
  width?: number;
  height?: number;
  color?: KeyOfColors;
  backgroundColor?: KeyOfColors;
}

const Button = ({
  width,
  height,
  color,
  backgroundColor,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

type ButtonStyleProps = Pick<ButtonProps, 'width' | 'height' | 'color' | 'backgroundColor'>;

const StyledButton = styled('button')<ButtonStyleProps>`
  ${theme.typography.subtitle}

  ${({ width, height, color, backgroundColor }) => {
    return css`
      width: ${width ? `${width}rem` : '100%'};
      height: ${height ? `${height}rem` : `5.2rem`};
      color: ${theme.color[color ?? 'gray000']};
      background-color: ${theme.color[backgroundColor ?? 'primary_default']};
    `;
  }}

  border-radius: 0.8rem;
`;
