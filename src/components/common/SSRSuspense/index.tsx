import { Suspense } from 'react';
import { useIsMounted } from '@toss/react';
import type { ComponentProps } from 'react';

export function SSRSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <>{props.fallback}</>;
  }

  return <Suspense {...props} />;
}
