import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import type { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';

import GlobalErrorFallback from '~/components/common/GlobalErrorFallback';
import Layout from '~/components/common/Layout';
import QueryClientProvider from '~/components/common/QueryClientProvider';
import QueryErrorBoundary from '~/components/common/QueryErrorBoundary';
import RecoilDebugObserver from '~/components/common/RecoilDebugObserver';
import GlobalStyle from '~/styles/GlobalStyle';
import Theme from '~/styles/Theme';

interface PageProps {
  dehydratedState: ComponentProps<typeof QueryClientProvider>['dehydratedState'];
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <RecoilRoot>
      <QueryClientProvider dehydratedState={pageProps.dehydratedState}>
        <QueryErrorBoundary ErrorFallback={GlobalErrorFallback}>
          <RecoilDebugObserver />
          <Suspense fallback={<>Global Suspense</>}>
            <ThemeProvider theme={Theme}>
              <GlobalStyle />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </Suspense>
        </QueryErrorBoundary>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
