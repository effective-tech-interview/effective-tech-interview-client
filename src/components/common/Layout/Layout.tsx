/* eslint-disable @typescript-eslint/ban-types */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LocalFont from '@next/font/local';
import type { PropsWithChildren } from 'react';

import useBackGroundColor from '~/hooks/useBackgroundColor';
import { theme } from '~/styles/Theme';

const Font = LocalFont({
  src: './PretendardVariable.woff2',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const { backgroundColor } = useBackGroundColor();

  return (
    <StyledLayout backgroundColor={backgroundColor} className={Font.className}>
      {children}
    </StyledLayout>
  );
};

export default Layout;
type LayoutStyleProps = ReturnType<typeof useBackGroundColor>;

const StyledLayout = styled('main')<LayoutStyleProps>`
  padding: 0 16px;
  height: 100vh;
  overflow: auto;

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  }

  ${({ backgroundColor }) => {
    return css`
      background-color: ${backgroundColor};
    `;
  }}

  ${theme.mediaQuery.desktop} {
    width: 360px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
