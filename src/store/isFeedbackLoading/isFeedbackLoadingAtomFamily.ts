import { atomFamily } from 'recoil';

const isFeedbackLoadingAtomFamily = atomFamily({
  key: 'isFeedbackLoading',
  default: false,
});

export default isFeedbackLoadingAtomFamily;
