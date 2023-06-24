import { useState } from 'react';
import { useRecoilState } from 'recoil';

import isNextQusetionButtonClickedAtom from '~/store/isNextQuestionButtonClicked/isNextQuestionButtonClickedAtomFamily';

import { usePagesMutation } from './mutation/usePagesMutation';
import useDidMount from './useDidMount';
import { useDidUpdate } from './useDidUpdate';

const useGetPages = (midCategoryId: number) => {
  const { mutate: pagesMutate, isSuccess: pagesIsSuccess, data: pagesData } = usePagesMutation();
  const [pagesId, setPagesId] = useState(0);
  const [isNextQuestionButtonClicked, setIsNextQuestionButtonClicked] = useRecoilState(
    isNextQusetionButtonClickedAtom
  );

  useDidMount(() => {
    pagesMutate({ midCategoryId });
  });

  useDidUpdate(() => {
    if (isNextQuestionButtonClicked) {
      pagesMutate({ midCategoryId });
      setIsNextQuestionButtonClicked(false);
    }
  });

  useDidUpdate(() => {
    if (pagesIsSuccess) setPagesId(pagesData.id);
  }, [pagesIsSuccess]);

  return { pagesId };
};

export default useGetPages;
