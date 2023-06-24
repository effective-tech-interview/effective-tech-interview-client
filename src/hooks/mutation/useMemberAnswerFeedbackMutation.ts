import { useMutation } from '@tanstack/react-query';

import { postMemberAnswerFeedback } from '~/apis';

interface UseMemberAnswerFeedbackMutationProps {
  pageId: number;
  pageQuestionId: number;
}

export const useMemberAnswerFeedbackMutation = () => {
  const memberAnswerFeedbackMutation = useMutation(
    ({ pageId, pageQuestionId }: UseMemberAnswerFeedbackMutationProps) =>
      postMemberAnswerFeedback(pageId, pageQuestionId)
  );
  return memberAnswerFeedbackMutation;
};
