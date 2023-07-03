import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import aiFeedbackButtonDisableAtomFamily from '~/store/aiFeedbackButtonDisable/aiFeedbackButtonDisableAtomFamily';

import { useQuestionsQuery } from './query/useQuestionsQuery';

interface Props {
  pageId: number;
  pageQuestionId: number;
}

const useFeedbackQuestionButtonDisabled = ({ pageId, pageQuestionId }: Props) => {
  const { data: questionsData, isSuccess: quesionsIsSuccess } = useQuestionsQuery(pageId);

  const [disabled, setDisabled] = useRecoilState(aiFeedbackButtonDisableAtomFamily(pageQuestionId));

  useEffect(() => {
    if (quesionsIsSuccess) {
      const memberAnswer = questionsData.questions[questionsData.questions.length - 1].memberAnswer;

      setDisabled(Boolean(!memberAnswer));

      const feedback = questionsData.questions[questionsData.questions.length - 1].positiveFeedback;

      if (feedback) setDisabled(true);
    }
  }, [quesionsIsSuccess, questionsData, setDisabled]);

  return { disabled };
};

export default useFeedbackQuestionButtonDisabled;
