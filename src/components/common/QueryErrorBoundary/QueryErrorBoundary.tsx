import React from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';

interface QueryErrorBoundaryProps {
  ErrorFallback: React.ComponentType<FallbackProps>;
}

const QueryErrorBoundary = ({
  ErrorFallback,
  children,
}: PropsWithChildren<QueryErrorBoundaryProps>) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default QueryErrorBoundary;
