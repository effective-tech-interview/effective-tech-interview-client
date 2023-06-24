import { useRecoilValue } from 'recoil';

import questionInputDisableAtomFamily from '~/store/questionInputDisable/questionInputDisableAtomFamily';

interface Props {
  pageQuestionId: number;
}

const useMemberAnswerDisabled = ({ pageQuestionId }: Props) => {
  const disabled = useRecoilValue(questionInputDisableAtomFamily(pageQuestionId));

  return { disabled };
};

export default useMemberAnswerDisabled;
