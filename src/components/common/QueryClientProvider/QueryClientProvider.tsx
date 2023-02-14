import { useState } from 'react';
import type { DehydratedState } from '@tanstack/react-query';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';

interface QueryClientProviderProps {
  dehydratedState: DehydratedState;
}

const QueryClientProvider = ({
  children,
  dehydratedState,
}: PropsWithChildren<QueryClientProviderProps>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <TanStackQueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </TanStackQueryClientProvider>
  );
};

export default QueryClientProvider;
