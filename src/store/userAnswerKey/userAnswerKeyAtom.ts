import { atom } from 'recoil';

const userAnswerKeyAtom = atom<number[]>({
  key: 'userAnswerKey',
  default: [],
});

export default userAnswerKeyAtom;
