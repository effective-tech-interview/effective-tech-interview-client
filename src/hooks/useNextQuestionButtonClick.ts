import { useSetRecoilState } from 'recoil';

import isNextQusetionButtonClickedAtom from '~/store/isNextQuestionButtonClicked/isNextQuestionButtonClickedAtomFamily';

const useNextQuestionButtonClick = () => {
  const setIsNextQuestionButtonClicked = useSetRecoilState(isNextQusetionButtonClickedAtom);

  const handleClick = () => {
    setIsNextQuestionButtonClicked(true);
  };

  return { handleClick };
};

export default useNextQuestionButtonClick;
