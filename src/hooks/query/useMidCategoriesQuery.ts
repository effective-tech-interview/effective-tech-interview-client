import { useQuery } from '@tanstack/react-query';

import { getMidCategories } from '~/apis';
import { MID_CATEGORIES_QUERY_KEYS } from '~/constants/queryKeys';

export const useMidCategoriesQuery = (mainCategoryId: number) => {
  const midCategoriesQuery = useQuery({
    queryKey: MID_CATEGORIES_QUERY_KEYS.getMidCategories(mainCategoryId),
    queryFn: () => getMidCategories(mainCategoryId),
  });
  return midCategoriesQuery;
};
