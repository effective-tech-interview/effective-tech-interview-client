import { useMutation } from '@tanstack/react-query';

import { postAiAnswer } from '~/apis';

interface UseAiAnswerMutationProps {
  pageId: number;
  pageQuestionId: number;
}

export const useAiAnswerMutation = () => {
  const saveAiAnswerMutation = useMutation(({ pageId, pageQuestionId }: UseAiAnswerMutationProps) =>
    postAiAnswer(pageId, pageQuestionId)
  );
  return saveAiAnswerMutation;
};
