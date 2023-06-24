import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import userAnswerKeyAtom from '~/store/userAnswerKey/userAnswerKeyAtom';

interface Props {
  pageQuestionId: number;
}

const useMemberAnswerKey = ({ pageQuestionId }: Props) => {
  const setKey = useSetRecoilState(userAnswerKeyAtom);

  useEffect(() => {
    setKey(prev => [...prev, pageQuestionId]);
  }, [pageQuestionId, setKey]);
};

export default useMemberAnswerKey;
