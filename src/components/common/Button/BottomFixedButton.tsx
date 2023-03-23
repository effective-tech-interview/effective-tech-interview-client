import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import type { ComponentProps } from 'react';

import { theme } from '~/styles/Theme';

import { Icon } from '../Icon';
import Button from './Button';

const SingleBottomFixedButton = (props: ComponentProps<typeof Button>) => {
  return (
    <div css={BottomFixedButtonWrapperStyle}>
      <Button {...props} />
    </div>
  );
};

const DoubleBottomFixedButton = (props: ComponentProps<typeof Button>) => {
  const router = useRouter();

  return (
    <div css={BottomFixedButtonWrapperStyle}>
      <div css={DoubleBottomFixedButtonWrapperStyle}>
        <Button {...props} />
        <Button variant="largeSecondary" onClick={() => router.reload()}>
          <Icon
            iconName="rightArrow"
            width={18}
            wrapperProps={{
              style: { marginLeft: '10px', marginTop: '10px', color: 'white' },
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export { DoubleBottomFixedButton, SingleBottomFixedButton };

const BottomFixedButtonWrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.gray000};
  padding: 1.6rem;

  ${theme.mediaQuery.desktop} {
    width: 360px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const DoubleBottomFixedButtonWrapperStyle = css`
  display: grid;
  grid-template-columns: 85% 15%;
  gap: 1rem;
`;
