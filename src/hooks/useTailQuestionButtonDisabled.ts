import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import tailQuestionButtonDisableAtomFamily from '~/store/tailQuestionButtonDisable/tailQuestionButtonDisableAtomFamily';

import { useQuestionsQuery } from './query/useQuestionsQuery';

interface Props {
  pageId: number;
  pageQuestionId: number;
}

const TOTAL_TAIL_QUESTION_NUMBER = 4;

const useTailQuestionButtonDisabled = ({ pageId, pageQuestionId }: Props) => {
  const { data: questionsData, isSuccess: quesionsIsSuccess } = useQuestionsQuery(pageId);

  const [disabled, setDisabled] = useRecoilState(
    tailQuestionButtonDisableAtomFamily(pageQuestionId)
  );

  useEffect(() => {
    if (quesionsIsSuccess) {
      const memberAnswer = questionsData.questions[questionsData.questions.length - 1].memberAnswer;

      setDisabled(Boolean(!memberAnswer));

      if (questionsData.questions.length === TOTAL_TAIL_QUESTION_NUMBER) setDisabled(true);
    }
  }, [quesionsIsSuccess, questionsData, setDisabled]);

  return { disabled };
};

export default useTailQuestionButtonDisabled;
