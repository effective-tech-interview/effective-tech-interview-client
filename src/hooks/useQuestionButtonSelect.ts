import { useState } from 'react';

import { useQuestionsQuery } from './query/useQuestionsQuery';
import { useDidUpdate } from './useDidUpdate';

type ButtonVariants = 'simple' | 'complex';

interface ActionData {
  pageId: number;
  pageQuestionId: number;
}

interface Props {
  actionData: ActionData;
}

const useQuestionButtonSelect = ({ actionData: { pageId } }: Props) => {
  const { data: questionsData, isSuccess: questionsIsSuccess } = useQuestionsQuery(pageId);

  const [variants, setVariants] = useState<{ variants: ButtonVariants }>({ variants: 'simple' });

  useDidUpdate(() => {
    if (questionsIsSuccess) {
      const firstMemberAnswer = questionsData.questions[0].memberAnswer;

      if (firstMemberAnswer) setVariants({ variants: 'complex' });
    }
  }, [questionsIsSuccess, questionsData]);

  return variants;
};

export default useQuestionButtonSelect;
