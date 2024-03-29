import { useQuery } from '@tanstack/react-query';

import { getQuestions } from '~/apis';
import { QUESTIONS_QUERY_KEYS } from '~/constants/queryKeys';

export const useQuestionsQuery = (pageId?: number, midCategoryId?: number) => {
  const questionsQuery = useQuery({
    queryKey: QUESTIONS_QUERY_KEYS.getQuestions(pageId, midCategoryId),
    queryFn: () => getQuestions(pageId, midCategoryId),
    enabled: Boolean(pageId && midCategoryId),
  });

  return questionsQuery;
};
