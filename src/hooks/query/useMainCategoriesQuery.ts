import { useQuery } from '@tanstack/react-query';

import { getMainCategories } from '~/apis';
import { USER_INFO_QUERY_KEYS } from '~/constants/queryKeys';

export const useMainCategoriesQuery = () => {
  const mainCategoriesQuery = useQuery({
    queryKey: USER_INFO_QUERY_KEYS.USER_INFO,
    queryFn: getMainCategories,
  });
  return mainCategoriesQuery;
};
