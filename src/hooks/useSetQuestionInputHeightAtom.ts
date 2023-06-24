import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import questionInputHeightAtom from '~/store/questionInputHeight/questionInputHeightAtom';

const useSetQuestionInputHeightAtom = (inputRef: HTMLDivElement | null) => {
  const setQuestionInputHeight = useSetRecoilState(questionInputHeightAtom);

  useEffect(() => {
    if (inputRef) {
      setQuestionInputHeight(inputRef.scrollHeight);
    }
  }, [inputRef, setQuestionInputHeight]);
};

export default useSetQuestionInputHeightAtom;
