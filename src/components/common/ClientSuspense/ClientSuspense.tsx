import { Suspense } from 'react';
import type { ComponentProps } from 'react';

import useMounted from '~/hooks/common/useMounted';

const ClientSuspense = (props: ComponentProps<typeof Suspense>) => {
  const { mounted: isMounted } = useMounted();

  return isMounted ? <Suspense {...props} /> : <>{props.fallback}</>;
};

export default ClientSuspense;
