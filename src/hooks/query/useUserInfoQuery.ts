import { useQuery } from '@tanstack/react-query';

import { getUser } from '~/apis';
import { MAIN_CATEGORIES_QUERY_KEYS } from '~/constants/queryKeys';

export const useUserrInfoQuery = () => {
  const userInfoQuery = useQuery({
    queryKey: MAIN_CATEGORIES_QUERY_KEYS.getMainCategories,
    queryFn: getUser,
  });
  return userInfoQuery;
};
