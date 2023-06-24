import useQuestionButtonSelect from '~/hooks/useQuestionButtonSelect';

import { QuestionButtonComplexWrapperUI, QuestionButtonSimpleWrapperUI } from '../../ui/button';
import { FeedbackQuestionButtonApplication } from './FeedbackQuestionButtonApplication';
import { NextQuestionButtonApplication } from './NextQuestionButtonApplication';
import { OtherQuestionButtonApplication } from './OtherQuestionButtonApplication';
import { TailQuestionButtonApplication } from './TailQuestionButtonApplication';

interface ActionData {
  pageId: number;
  pageQuestionId: number;
}

interface Props {
  actionData: ActionData;
}

const QuestionButtonApplication = ({ actionData }: Props) => {
  const { variants } = useQuestionButtonSelect({ actionData });

  return (
    <>
      {variants === 'simple' && (
        <QuestionButtonSimpleWrapperUI>
          <OtherQuestionButtonApplication />
        </QuestionButtonSimpleWrapperUI>
      )}
      {variants === 'complex' && (
        <QuestionButtonComplexWrapperUI>
          <TailQuestionButtonApplication actionData={actionData} />
          <FeedbackQuestionButtonApplication actionData={actionData} />
          <NextQuestionButtonApplication />
        </QuestionButtonComplexWrapperUI>
      )}
    </>
  );
};

export default QuestionButtonApplication;
