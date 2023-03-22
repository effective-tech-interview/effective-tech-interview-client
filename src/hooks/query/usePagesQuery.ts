import { useQuery } from '@tanstack/react-query';

import { getPages } from '~/apis';
import { PAGES_QUERY_KEYS } from '~/constants/queryKeys';

export const usePagesQuery = () => {
  const pagesQuery = useQuery({
    queryKey: PAGES_QUERY_KEYS.getPages,
    queryFn: () => getPages(),
  });

  return pagesQuery;
};
