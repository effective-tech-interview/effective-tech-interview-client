import { forwardRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FocusEvent } from 'react';

import { theme } from '~/styles/Theme';

import Text from '../Text';

interface Props extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  name?: string;
  width?: number;
  height?: number;
  label?: string;
  errorMessage?: string;
  // 아이콘이나 버튼
  suffix?: React.ReactNode;
  // 비밀번호
  isVisible?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label = '',
      isVisible = true,
      name,
      errorMessage,
      width,
      height,
      required,
      onFocus,
      onBlur,
      suffix,
      ...props
    }: Props,
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <Wrapper>
        <label htmlFor={name}>
          <Text variant="subtitle">
            {label}
            {required && '*'}
          </Text>
        </label>
        <InputContainer
          width={width}
          height={height}
          isFocus={isFocus}
          isError={Boolean(errorMessage)}
          {...props}
        >
          <InitialInput
            type={isVisible ? 'text' : 'password'}
            ref={ref}
            id={name}
            name={name}
            required={required}
            {...props}
            onFocus={(e: FocusEvent<HTMLInputElement, Element>) => {
              onFocus?.(e);
              setIsFocus(true);
            }}
            onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
              onBlur?.(e);
              setIsFocus(false);
            }}
          />
          {suffix && suffix}
        </InputContainer>
        {errorMessage && (
          <Text
            variant="caption"
            color="system_error"
            style={{ position: 'absolute', bottom: '-20px', whiteSpace: 'pre' }}
          >
            {errorMessage}
          </Text>
        )}
      </Wrapper>
    );
  }
);

export const InitialInputFocusStyle = css`
  border: ${theme.color.gray200} 2px solid !important;
  background: ${theme.color.gray050};
  outline: none;
  box-shadow: none;
  color: ${theme.color.gray800};
`;

export const InitialInputErrorStyle = css`
  border: 1px solid ${theme.color.system_error};
`;

export const InitialInputHoverStyle = css`
  &:hover {
    background: ${theme.color.gray100};
    border: ${theme.color.gray400} 1px solid !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;

const InputContainer = styled('div')<{
  width?: number;
  height?: number;
  isFocus: boolean;
  isError: boolean;
}>`
  border-radius: 8px;
  display: flex;
  align-items: center;
  ${({ width, height, isFocus, isError }) => {
    const errorStyle = isError && InitialInputErrorStyle;
    const focusStyle = isFocus && InitialInputFocusStyle;
    const hoverStyle = !isFocus && InitialInputHoverStyle;

    return css`
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '48px'};
      ${focusStyle}
      ${errorStyle}
      ${hoverStyle}
    `;
  }}
  background:  ${theme.color.gray050};
  padding: 0 12px;
`;

const InitialInput = styled('input')`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;

  color: ${theme.color.gray800};

  ::placeholder {
    color: ${theme.color.gray400};
  }

  &:disabled {
    border: none;
    background: ${theme.color.gray600};
    ::placeholder {
      color: ${theme.color.gray600};
    }
  }

  //body01
  ${theme.typography.b1}

  box-sizing: border-box;
  outline: none;
  border-radius: 8px;
`;
