import { useMutation } from '@tanstack/react-query';

import { postMemberAnswer } from '~/apis';

interface UseMemberAnswerMutationProps {
  pageId: number;
  pageQuestionId: number;
  memberAnswer: string;
}

export const useMemberAnswerMutation = () => {
  const saveMemberAnswerMutation = useMutation(
    ({ pageId, pageQuestionId, memberAnswer }: UseMemberAnswerMutationProps) =>
      postMemberAnswer(pageId, pageQuestionId, memberAnswer)
  );
  return saveMemberAnswerMutation;
};
