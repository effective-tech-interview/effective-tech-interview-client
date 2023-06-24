import type { ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';

import userAnswerAtomFamily from '~/store/userAnswer/userAnswerAtomFamily';

interface Props {
  pageQuestionId: number;
}

const useMemberAnswerChange = ({ pageQuestionId }: Props) => {
  const setMemberAnswer = useSetRecoilState(userAnswerAtomFamily(pageQuestionId));

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemberAnswer(event.target.value);
  };

  return { handleChange };
};

export default useMemberAnswerChange;
