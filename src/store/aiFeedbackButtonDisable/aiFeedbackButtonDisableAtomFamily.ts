import { atomFamily } from 'recoil';

const aiFeedbackButtonDisableAtomFamily = atomFamily({
  key: 'aiFeedbackButtonDisable',
  default: false,
});

export default aiFeedbackButtonDisableAtomFamily;
