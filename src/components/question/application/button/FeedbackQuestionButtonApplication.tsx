import { FeedbackQuestionButtonUI } from '../../ui/button';

interface ActionData {
  pageId: number;
  pageQuestionId: number;
}

interface Props {
  actionData: ActionData;
}

const FeedbackQuestionButtonApplication = ({}: Props) => {
  // const { disabled } = useFeedbackQuestionButtonDisabled({ pageId });
  // const { handleClick } = useFeedbackQuestionButtonClick({ pageId, pageQuestionId });

  return <FeedbackQuestionButtonUI disabled={true} onClick={() => null} />;
};

export { FeedbackQuestionButtonApplication };
