import { useEffect, useState } from 'react';

import { useQuestionsQuery } from './query/useQuestionsQuery';

interface Props {
  pageId: number;
}

const useTailQuestionButtonDisabled = ({ pageId }: Props) => {
  const [disabled, setDisabled] = useState(true);

  const { data: questionsData, isSuccess: quesionsIsSuccess } = useQuestionsQuery(pageId);

  useEffect(() => {
    if (quesionsIsSuccess) {
      const memberAnswer = questionsData.questions[questionsData.questions.length - 1].memberAnswer;

      setDisabled(Boolean(!memberAnswer));
    }
  }, [quesionsIsSuccess, questionsData]);

  return { disabled };
};

export default useTailQuestionButtonDisabled;
