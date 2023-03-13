import { useQuery } from '@tanstack/react-query';

import { getMidCategory } from '~/apis';
import { MID_CATEGORY_QUERY_KEYS } from '~/constants/queryKeys';

export const useMidCategoryQuery = (midCategoryId: number) => {
  const midCategoryQuery = useQuery({
    queryKey: MID_CATEGORY_QUERY_KEYS.getMidCategory(midCategoryId),
    queryFn: () => getMidCategory(midCategoryId),
  });
  return midCategoryQuery;
};
