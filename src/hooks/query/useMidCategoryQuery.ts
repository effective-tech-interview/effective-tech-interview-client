import { useQuery } from '@tanstack/react-query';

import { getMidCategories } from '~/apis';
import { MID_CATEGORY_QUERY_KEYS } from '~/constants/queryKeys';

export const useMidCategoryQuery = (mainCategoryId: number) => {
  const midCategoryQuery = useQuery({
    queryKey: MID_CATEGORY_QUERY_KEYS.getMidCategories(mainCategoryId),
    queryFn: () => getMidCategories(mainCategoryId),
  });
  return midCategoryQuery;
};
