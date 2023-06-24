import { selector } from 'recoil';

import questionInputDisableAtomFamily from '../questionInputDisable/questionInputDisableAtomFamily';
import userAnswerAtomFamily from '../userAnswer/userAnswerAtomFamily';
import userAnswerKeyAtom from '../userAnswerKey/userAnswerKeyAtom';

const userAnswerResetSelector = selector({
  key: 'userAnswerReset',
  get: ({ get }) => {
    const userKeys = get(userAnswerKeyAtom);
    return userKeys.length;
  },
  set: ({ get, set }) => {
    const userKeys = get(userAnswerKeyAtom);

    userKeys.forEach(key => {
      set(userAnswerAtomFamily(key), '');
      set(questionInputDisableAtomFamily(key), false);
    });
  },
});

export default userAnswerResetSelector;
