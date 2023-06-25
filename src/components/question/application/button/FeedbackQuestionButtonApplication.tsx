import useFeedbackQuestionButtonClick from '~/hooks/useFeedbackQuestionButtonClick';
import useFeedbackQuestionButtonDisabled from '~/hooks/useFeedbackQuestionButtonDisabled';

import { FeedbackQuestionButtonUI } from '../../ui/button';

interface ActionData {
  pageId: number;
  pageQuestionId: number;
}

interface Props {
  actionData: ActionData;
}

const FeedbackQuestionButtonApplication = ({ actionData: { pageId, pageQuestionId } }: Props) => {
  const { disabled } = useFeedbackQuestionButtonDisabled({ pageId, pageQuestionId });
  const { handleClick } = useFeedbackQuestionButtonClick({ pageId, pageQuestionId });

  return <FeedbackQuestionButtonUI disabled={disabled} onClick={handleClick} />;
};

export { FeedbackQuestionButtonApplication };
