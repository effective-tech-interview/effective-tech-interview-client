import { useQuery } from '@tanstack/react-query';

import { getRandomQuestion } from '~/apis';
import { RANDOM_QUESTION_QUERY_KEYS } from '~/constants/queryKeys';

export const useRandomQuestionQuery = (midCategoryId: number) => {
  const randomQuestionQuery = useQuery({
    queryKey: RANDOM_QUESTION_QUERY_KEYS.getRandomQuestion(midCategoryId),
    queryFn: () => getRandomQuestion(midCategoryId),
  });

  return randomQuestionQuery;
};
