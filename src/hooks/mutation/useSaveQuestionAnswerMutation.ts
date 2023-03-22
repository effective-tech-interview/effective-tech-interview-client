import { useMutation } from '@tanstack/react-query';

import { postSaveQuestionAnswer } from '~/apis';

interface UseSaveQuestionAnswerMutationProps {
  pageId: number;
  questionId: number;
  memberAnswer: string;
}

export const useSaveQuestionAnswerMutation = () => {
  const saveQuestionAnswerMutation = useMutation(
    ({ pageId, questionId, memberAnswer }: UseSaveQuestionAnswerMutationProps) =>
      postSaveQuestionAnswer(pageId, questionId, memberAnswer)
  );
  return saveQuestionAnswerMutation;
};
