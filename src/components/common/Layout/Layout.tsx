/* eslint-disable @typescript-eslint/ban-types */
import LocalFont from '@next/font/local';
import type { PropsWithChildren } from 'react';

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

export default function Layout({ children }: PropsWithChildren<{}>) {
  return <main className={Font.className}>{children}</main>;
}
