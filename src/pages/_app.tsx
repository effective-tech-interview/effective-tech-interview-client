import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import type { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';

import GlobalErrorFallback from '~/components/common/GlobalErrorFallback';
import QueryErrorBoundary from '~/components/common/QueryErrorBoundary';
import QueryClientProvider from '~/components/QueryClientProvider';
import RecoilDebugObserver from '~/components/RecolDebugObserver';

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
