import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ComponentProps, PropsWithChildren } from 'react';

import type { KeyOfButtonVariants } from '~/constants/button';
import { BUTTON_VARAINTS } from '~/constants/button';
import { theme } from '~/styles/Theme';

interface ButtonProps extends ComponentProps<'button'> {
  width?: number;
  height?: number;
  variant: KeyOfButtonVariants;
}

const Button = ({ width, height, variant, children, ...rest }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton width={width} height={height} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

type ButtonStyleProps = Pick<ButtonProps, 'width' | 'height' | 'variant' | 'disabled'>;

const StyledButton = styled('button')<ButtonStyleProps>`
  ${({ width, height, variant, disabled }) => {
    // Default Style
    const DEFAULT_FONT_SIZE = BUTTON_VARAINTS[variant].default.fontSize;
    const DEFAULT_COLOR = BUTTON_VARAINTS[variant].default.color;
    const DEFAULT_BACKGROUND_COLOR = BUTTON_VARAINTS[variant].default.backgroundColor;

    // Press Style
    const PRESS_BACKGROUND_COLOR = BUTTON_VARAINTS[variant].press?.backgroundColor;

    // Disabled Style
    const DISABLED_COLOR = BUTTON_VARAINTS[variant].disabled?.color;
    const DISABLED_BACKGROUND_COLOR = BUTTON_VARAINTS[variant].disabled?.backgroundColor;

    return css`
      ${theme.typography[DEFAULT_FONT_SIZE]};

      width: ${width ? `${width}rem` : '100%'};
      height: ${height ? `${height}rem` : `5.2rem`};
      color: ${disabled
        ? theme.color[DISABLED_COLOR ?? DEFAULT_COLOR]
        : theme.color[DEFAULT_COLOR]};
      background-color: ${disabled
        ? theme.color[DISABLED_BACKGROUND_COLOR ?? DEFAULT_BACKGROUND_COLOR]
        : theme.color[DEFAULT_BACKGROUND_COLOR]};

      &:active {
        background-color: ${!disabled &&
        theme.color[PRESS_BACKGROUND_COLOR ?? DEFAULT_BACKGROUND_COLOR]};
      }
    `;
  }}

  border-radius: 0.8rem;
`;
