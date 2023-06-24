import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import questionInputHeightAtom from '~/store/questionInputHeight/questionInputHeightAtom';

const useAutoSizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const setHeight = useSetRecoilState(questionInputHeightAtom);

  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '27px';

      const scrollHeight = textAreaRef.scrollHeight;

      setScrollHeight(scrollHeight);

      setHeight(scrollHeight);

      textAreaRef.style.height = scrollHeight + 'px';

      if (scrollHeight > 95) {
        textAreaRef.style.height = '95px';
        setHeight(95);
      }
    }
  }, [setHeight, textAreaRef, value]);

  return { scrollHeight };
};

export default useAutoSizeTextArea;
