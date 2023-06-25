import { atomFamily } from 'recoil';

const tailQuestionButtonDisableAtomFamily = atomFamily({
  key: 'tailQuestionButtonDisable',
  default: false,
});

export default tailQuestionButtonDisableAtomFamily;
