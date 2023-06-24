import { atomFamily } from 'recoil';

const questionInputDisableAtomFamily = atomFamily({
  key: 'questionInputDisable',
  default: false,
});

export default questionInputDisableAtomFamily;
