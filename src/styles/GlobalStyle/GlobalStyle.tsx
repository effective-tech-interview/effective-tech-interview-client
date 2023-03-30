import { css, Global } from '@emotion/react';

import { theme } from '../Theme';
import { resetCss } from './reset';

export default function GlobalStyle() {
  return <Global styles={globalCss} />;
}

const globalCss = css`
  ${resetCss}

  * {
    box-sizing: border-box;
  }

  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  body ::-webkit-scrollbar {
    display: none;
  }

  div ::-webkit-scrollbar {
    display: none;
  }

  html {
    font-size: 62.5%;

    ${theme.mediaQuery.desktop} {
      display: flex;
      justify-content: center;
      background-color: ${theme.color.gray050};
    }
  }

  a {
    color: inherit;

    &:visited {
      color: inherit;
    }
  }

  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
`;
