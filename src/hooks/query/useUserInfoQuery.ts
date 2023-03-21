import { useQuery } from '@tanstack/react-query';

import { getUser } from '~/apis';
import { USER_INFO_QUERY_KEYS } from '~/constants/queryKeys';

export const useUserInfoQuery = () => {
  const userInfoQuery = useQuery({
    queryKey: USER_INFO_QUERY_KEYS.USER_INFO,
    queryFn: getUser,
  });
  return userInfoQuery;
};
