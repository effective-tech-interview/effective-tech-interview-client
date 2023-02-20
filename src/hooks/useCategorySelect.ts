import { useState } from 'react';
import { useRecoilState } from 'recoil';

import selectedCategoryIdAtomFamily from '~/store/selectedCategoryId/selectedCategoryIdAtom';

import { useDidUpdate } from './useDidUpdate';

type CategoryType = 'main' | 'mid';

interface UseCategorySelectProps {
  type: CategoryType;
  categoryId: number;
}

const useCategorySelect = ({ type, categoryId }: UseCategorySelectProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedCategoryIdAtomFamily(type));
  const [selected, setSelected] = useState(false);

  useDidUpdate(() => {
    categoryId === selectedId ? setSelected(true) : setSelected(false);
  }, [selectedId]);

  const handleCategorySelect = () => {
    setSelectedId(categoryId);
  };

  return { selected, handleCategorySelect };
};

export default useCategorySelect;
