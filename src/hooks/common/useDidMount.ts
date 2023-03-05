import { useEffect } from 'react';

import type { CallbackWithNoArguments } from '~/types';

const useDidMount = (callback: CallbackWithNoArguments): void => {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useDidMount;
