import { useQuery } from '@tanstack/react-query';

import { getMainCategories } from '~/apis';
import { MAIN_CATEGORIES_QUERY_KEYS } from '~/constants/queryKeys';

export const useMainCategoriesQuery = () => {
  const mainCategoriesQuery = useQuery({
    queryKey: MAIN_CATEGORIES_QUERY_KEYS.getMainCategories,
    queryFn: getMainCategories,
  });
  return mainCategoriesQuery;
};
