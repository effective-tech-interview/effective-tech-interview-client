import { useState } from 'react';

import useDidMount from './useDidMount';

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useDidMount(() => {
    setMounted(true);
  });

  return { mounted };
};

export default useMounted;
