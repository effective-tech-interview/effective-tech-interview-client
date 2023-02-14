import type { FallbackProps } from 'react-error-boundary';

const GlobalErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      ⚠️ Error: {error.message}
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
};

export default GlobalErrorFallback;
