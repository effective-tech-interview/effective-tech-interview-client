import useOtherQuestionButtonClick from '~/hooks/useOtherQuestionButtonClick';

import { OtherQuestionButtonUI } from '../../ui/button';

const OtherQuestionButtonApplication = () => {
  const { handleClick } = useOtherQuestionButtonClick();

  return <OtherQuestionButtonUI onClick={handleClick} />;
};

export { OtherQuestionButtonApplication };
