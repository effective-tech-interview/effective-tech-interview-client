/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/export */
import { ThemeProvider } from '@emotion/react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { OverlayProvider } from '@toss/use-overlay';
import type { PropsWithChildren, ReactElement } from 'react';

import { theme } from '~/styles/Theme';

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <OverlayProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </OverlayProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };

export * from '@testing-library/react';
