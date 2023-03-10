import { useQuery } from '@tanstack/react-query';

import { getMainCategories } from '~/apis';
import { MAIN_CATEGORY_QUERY_KEYS } from '~/constants/queryKeys';

export const useMainCategoryQuery = () => {
  const mainCategoryQuery = useQuery({
    queryKey: MAIN_CATEGORY_QUERY_KEYS.getMainCategories,
    queryFn: getMainCategories,
  });
  return mainCategoryQuery;
};
