import { atomFamily } from 'recoil';

const userAnswerAtomFamily = atomFamily({
  key: 'userAnswer',
  default: '',
});

export default userAnswerAtomFamily;
