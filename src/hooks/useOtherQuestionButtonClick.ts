import { useSetRecoilState } from 'recoil';

import isNextQusetionButtonClickedAtom from '~/store/isNextQuestionButtonClicked/isNextQuestionButtonClickedAtomFamily';

const useOtherQuestionButtonClick = () => {
  const setIsOtherQuestionButtonClicked = useSetRecoilState(isNextQusetionButtonClickedAtom);

  const handleClick = () => {
    setIsOtherQuestionButtonClicked(true);
  };

  return { handleClick };
};

export default useOtherQuestionButtonClick;
