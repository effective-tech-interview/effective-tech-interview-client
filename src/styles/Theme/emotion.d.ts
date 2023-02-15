/* eslint-disable @typescript-eslint/no-empty-interface */
import type theme from './Theme';

import '@emotion/react';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
