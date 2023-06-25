import { useSetRecoilState } from 'recoil';

import aiFeedbackButtonDisableAtomFamily from '~/store/aiFeedbackButtonDisable/aiFeedbackButtonDisableAtomFamily';
import isFeedbackLoadingAtomFamily from '~/store/isFeedbackLoading/isFeedbackLoadingAtomFamily';
import tailQuestionButtonDisableAtomFamily from '~/store/tailQuestionButtonDisable/tailQuestionButtonDisableAtomFamily';

import { useMemberAnswerFeedbackMutation } from './mutation/useMemberAnswerFeedbackMutation';
import { useQuestionsQuery } from './query/useQuestionsQuery';
import { useDidUpdate } from './useDidUpdate';

interface Props {
  pageId: number;
  pageQuestionId: number;
}

const useFeedbackQuestionButtonClick = ({ pageId, pageQuestionId }: Props) => {
  const {
    mutate: memberAnswerFeedbackMutate,
    isSuccess: memberAnswerFeedbackIsSuccess,
    isLoading: memberAnswerFeedbackIsLoading,
  } = useMemberAnswerFeedbackMutation();

  const { refetch: questionsRefetch } = useQuestionsQuery(pageId);

  const setIsFeedbackLoading = useSetRecoilState(isFeedbackLoadingAtomFamily(pageQuestionId));

  const setAiFeedbackButtonDisabled = useSetRecoilState(
    aiFeedbackButtonDisableAtomFamily(pageQuestionId)
  );

  const setTailQuestionButtonDisabled = useSetRecoilState(
    tailQuestionButtonDisableAtomFamily(pageQuestionId)
  );

  useDidUpdate(() => {
    setIsFeedbackLoading(memberAnswerFeedbackIsLoading);
  }, [memberAnswerFeedbackIsLoading]);

  useDidUpdate(() => {
    if (memberAnswerFeedbackIsSuccess) questionsRefetch();
  }, [memberAnswerFeedbackIsSuccess]);

  const handleClick = () => {
    memberAnswerFeedbackMutate({
      pageId,
      pageQuestionId,
    });
    setAiFeedbackButtonDisabled(true);
    setTailQuestionButtonDisabled(true);
  };

  return { handleClick };
};

export default useFeedbackQuestionButtonClick;
