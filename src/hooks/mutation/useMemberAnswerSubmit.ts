import { useDidUpdate } from '@toss/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import questionInputDisableAtomFamily from '~/store/questionInputDisable/questionInputDisableAtomFamily';
import userAnswerAtomFamily from '~/store/userAnswer/userAnswerAtomFamily';

import { useQuestionsQuery } from '../query/useQuestionsQuery';
import { useAiAnswerMutation } from './useAiAnswerMutation';
import { useMemberAnswerMutation } from './useMemberAnswerMutation';

interface Props {
  pageId: number;
  pageQuestionId: number;
}

const useMemberAnswerSubmit = ({ pageId, pageQuestionId }: Props) => {
  const [memberAnswer, setMemberAnswer] = useRecoilState(userAnswerAtomFamily(pageQuestionId));

  const setInputDisalbe = useSetRecoilState(questionInputDisableAtomFamily(pageQuestionId));

  const { mutate: memberAnswerMutate, isSuccess: memberAnswerIsSuccess } =
    useMemberAnswerMutation();

  const { mutate: aiAnswerMutate, isSuccess: aiAnswerIsSuccess } = useAiAnswerMutation();

  const { refetch: questionsRefetch } = useQuestionsQuery(pageId);

  useDidUpdate(() => {
    if (memberAnswerIsSuccess) questionsRefetch();
  }, [memberAnswerIsSuccess]);

  useDidUpdate(() => {
    if (aiAnswerIsSuccess) questionsRefetch();
  }, [aiAnswerIsSuccess]);

  const handleSubmit = () => {
    memberAnswerMutate({
      pageId,
      pageQuestionId,
      memberAnswer,
    });
    aiAnswerMutate({
      pageId,
      pageQuestionId,
    });
    setMemberAnswer('');
    setInputDisalbe(true);
  };

  return { handleSubmit };
};

export default useMemberAnswerSubmit;
