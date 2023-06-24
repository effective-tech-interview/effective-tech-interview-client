import { atom } from 'recoil';

const isNextQusetionButtonClickedAtom = atom({
  key: 'isNextQuestionButtonClicked',
  default: false,
});

export default isNextQusetionButtonClickedAtom;
