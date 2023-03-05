import { useEffect } from 'react';

import type { CallbackWithNoArguments } from '~/types';

const useWillUnmount = (callback: CallbackWithNoArguments): void => {
  useEffect(() => {
    return callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWillUnmount;
