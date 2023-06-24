import useNextQuestionButtonClick from '~/hooks/useNextQuestionButtonClick';

import { NextQuestionButtonUI } from '../../ui/button';

const NextQuestionButtonApplication = () => {
  const { handleClick } = useNextQuestionButtonClick();

  return <NextQuestionButtonUI onClick={handleClick} />;
};

export { NextQuestionButtonApplication };
