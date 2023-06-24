import { useQuery } from '@tanstack/react-query';

import { getQuestions } from '~/apis';
import { QUESTIONS_QUERY_KEYS } from '~/constants/queryKeys';

export const useQuestionsQuery = (pageId?: number) => {
  const questionsQuery = useQuery({
    queryKey: QUESTIONS_QUERY_KEYS.getQuestions(pageId),
    queryFn: () => getQuestions(pageId),
    enabled: Boolean(pageId),
  });

  return questionsQuery;
};
