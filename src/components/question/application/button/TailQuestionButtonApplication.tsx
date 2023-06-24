import useTailQuestionButtonClick from '~/hooks/useTailQuestionButtonClick';
import useTailQuestionButtonDisabled from '~/hooks/useTailQuestionButtonDisabled';

import { TailQuestionButtonUI } from '../../ui/button';

interface ActionData {
  pageId: number;
  pageQuestionId: number;
}

interface Props {
  actionData: ActionData;
}

const TailQuestionButtonApplication = ({ actionData: { pageId, pageQuestionId } }: Props) => {
  const { disabled } = useTailQuestionButtonDisabled({ pageId });
  const { handleClick } = useTailQuestionButtonClick({ pageId, pageQuestionId });

  return <TailQuestionButtonUI disabled={disabled} onClick={handleClick} />;
};

export { TailQuestionButtonApplication };
