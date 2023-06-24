import { useMutation } from '@tanstack/react-query';

import { postTailQuestion } from '~/apis';

interface UseTailQuestionMutationProps {
  pageId: number;
  pageQuestionId: number;
}

export const useTailQuestionMutation = () => {
  const tailQuestionMutation = useMutation(
    ({ pageId, pageQuestionId }: UseTailQuestionMutationProps) =>
      postTailQuestion(pageId, pageQuestionId)
  );
  return tailQuestionMutation;
};
