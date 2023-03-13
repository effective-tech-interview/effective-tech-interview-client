import { css } from '@emotion/react';
import type { ComponentProps } from 'react';

import { theme } from '~/styles/Theme';

import Button from './Button';

const SingleBottomFixedButton = (props: ComponentProps<typeof Button>) => {
  return (
    <div css={BottomFixedButtonWrapperStyle}>
      <Button {...props} />
    </div>
  );
};

const DobuleBottomFixedButton = () => {
  return;
};

export { DobuleBottomFixedButton, SingleBottomFixedButton };

const BottomFixedButtonWrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.gray000};
  padding: 1.6rem;
`;
