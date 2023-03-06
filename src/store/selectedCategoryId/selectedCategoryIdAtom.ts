import { atomFamily } from 'recoil';

const selectedCategoryIdAtomFamily = atomFamily({
  key: 'selectedCategoryId',
  default: 0,
});

export default selectedCategoryIdAtomFamily;
