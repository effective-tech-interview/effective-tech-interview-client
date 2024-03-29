import { css } from '@emotion/react';

export const theme = {
  color: {
    gray000: '#FFFFFF',
    gray050: '#F0F0F5',
    gray100: '#E0E1EB',
    gray200: '#BEC4D5',
    gray400: '#9CA7C0',
    gray600: '#5E6473',
    gray800: '#383C45',
    primary_default: '#5445FF',
    primary_press: '#322999',
    teritary_default: '#F6F5FF',
    teritary_press: '#EEECFF',
    system_default: '#FF2F2F',
    system_press: '#CC2626',
    kakao: '#FEE500',
  },
  typography: {
    h1: css`
      font-size: 3.4rem;
      font-weight: 700;
      line-height: 4rem;
      letter-spacing: -0.25px;
    `,
    h2: css`
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 2.6rem;
      letter-spacing: 0px;
    `,
    b1: css`
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      letter-spacing: -0.25px;
    `,
    b2: css`
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.8rem;
      letter-spacing: -0.25px;
    `,
    b3: css`
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 2.2rem;
      letter-spacing: -0.25px;
      text-align: left;
    `,
    subtitle: css`
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: -0.25px;
    `,
    caption: css`
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0px;
    `,
  },
  mediaQuery: {
    desktop: `@media (min-width: 767px)`,
  },
};

export type KeyOfColors = keyof (typeof theme)['color'];
export type KeyOfTypography = keyof (typeof theme)['typography'];
