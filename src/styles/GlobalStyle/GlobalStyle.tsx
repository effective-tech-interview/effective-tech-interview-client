import { css, Global } from '@emotion/react';

import { resetCss } from './reset';

export default function GlobalStyle() {
  return <Global styles={globalCss} />;
}

const globalCss = css`
  ${resetCss}

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
`;
