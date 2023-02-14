import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import type { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';

import GlobalErrorFallback from '~/components/common/GlobalErrorFallback';
import QueryClientProvider from '~/components/common/QueryClientProvider';
import QueryErrorBoundary from '~/components/common/QueryErrorBoundary';
import RecoilDebugObserver from '~/components/common/RecoilDebugObserver';

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
            <Component {...pageProps} />
          </Suspense>
        </QueryErrorBoundary>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
