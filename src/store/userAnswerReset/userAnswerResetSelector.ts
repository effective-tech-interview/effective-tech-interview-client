import { selector } from 'recoil';

import aiFeedbackButtonDisableAtomFamily from '../aiFeedbackButtonDisable/aiFeedbackButtonDisableAtomFamily';
import isFeedbackLoadingAtomFamily from '../isFeedbackLoading/isFeedbackLoadingAtomFamily';
import questionInputDisableAtomFamily from '../questionInputDisable/questionInputDisableAtomFamily';
import tailQuestionButtonDisableAtomFamily from '../tailQuestionButtonDisable/tailQuestionButtonDisableAtomFamily';
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
      set(isFeedbackLoadingAtomFamily(key), false);
      set(aiFeedbackButtonDisableAtomFamily(key), false);
      set(tailQuestionButtonDisableAtomFamily(key), false);
    });
  },
});

export default userAnswerResetSelector;
