import { css } from '@emotion/react';
import type { ComponentProps, PropsWithChildren } from 'react';

import { theme } from '~/styles/Theme';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  id: string;
}

const Checkbox = ({ children, id, ...rest }: PropsWithChildren<CheckboxProps>) => {
  return (
    <>
      <input type="checkbox" id={id} css={CheckboxInputStyle} {...rest} />
      <label htmlFor={id} css={CheckboxLabelStyle}>
        {children}
      </label>
    </>
  );
};

export default Checkbox;

const CheckboxInputStyle = css`
  display: none;

  &:checked + label {
    :after {
      opacity: 1;
    }
  }
`;

const CheckboxLabelStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    background-color: ${theme.color.teritary_default};
    border: 1px solid ${theme.color.gray200};
    border-radius: 4px;
    margin-right: 0.6rem;
  }

  &:after {
    opacity: 0;
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: ${theme.color.primary_default};
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M0.499756 3.22727L2.68726 5.5L7.49976 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-size: 45%;
    background-position: 50%;
    background-repeat: no-repeat;
    border: 1px solid ${theme.color.primary_default};
    border-radius: 4px;
  }
`;
