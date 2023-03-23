import { useQuery } from '@tanstack/react-query';

import { getQuestionAnswerDeprecated } from '~/apis';
import { QUESTION_ANSWER_QUERY_KEYS } from '~/constants/queryKeys';

export const useQuestionAnswerQuery = (questionId?: number) => {
  const questionAnswerQuery = useQuery({
    queryKey: QUESTION_ANSWER_QUERY_KEYS.getQuestionAnswer(questionId),
    queryFn: () => getQuestionAnswerDeprecated(questionId),
  });
  return questionAnswerQuery;
};
