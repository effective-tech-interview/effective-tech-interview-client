import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { OverlayProvider } from '@toss/use-overlay';
import type { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';

import ClientSuspense from '~/components/common/ClientSuspense';
import GlobalErrorFallback from '~/components/common/GlobalErrorFallback';
import Layout from '~/components/common/Layout';
import QueryClientProvider from '~/components/common/QueryClientProvider';
import QueryErrorBoundary from '~/components/common/QueryErrorBoundary';
import RecoilDebugObserver from '~/components/common/RecoilDebugObserver';
import GlobalStyle from '~/styles/GlobalStyle';
import { theme } from '~/styles/Theme';
import * as gtag from '~/utils/gtag';

interface PageProps {
  dehydratedState: ComponentProps<typeof QueryClientProvider>['dehydratedState'];
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />

        {/* GA설정 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {/* hotjar 설정 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HJID},hjsv:${process.env.NEXT_PUBLIC_HJSV}};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
          }}
        />
      </Head>
      <RecoilRoot>
        <QueryClientProvider dehydratedState={pageProps.dehydratedState}>
          <OverlayProvider>
            <QueryErrorBoundary ErrorFallback={GlobalErrorFallback}>
              <RecoilDebugObserver />
              <ClientSuspense fallback={<></>}>
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ThemeProvider>
              </ClientSuspense>
            </QueryErrorBoundary>
          </OverlayProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
