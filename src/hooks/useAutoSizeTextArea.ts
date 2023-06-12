import { useEffect, useState } from 'react';

const useAutoSizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '27px';

      const scrollHeight = textAreaRef.scrollHeight;

      setScrollHeight(scrollHeight);

      textAreaRef.style.height = scrollHeight + 'px';

      if (scrollHeight > 95) textAreaRef.style.height = '95px';
    }
  }, [textAreaRef, value]);

  return [scrollHeight];
};

export default useAutoSizeTextArea;
