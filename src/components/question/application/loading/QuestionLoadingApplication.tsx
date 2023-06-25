import { useRecoilValue } from 'recoil';

import isFeedbackLoadingAtomFamily from '~/store/isFeedbackLoading/isFeedbackLoadingAtomFamily';
import userAnswerKeyAtom from '~/store/userAnswerKey/userAnswerKeyAtom';

import QuestionLoadingUI from '../../ui/loading/QuestionLoadingUI';

interface Props {
  pageQuestionId: number;
}

const QuestionLoadingApplication = ({ pageQuestionId }: Props) => {
  const isFeedbackLoading = useRecoilValue(isFeedbackLoadingAtomFamily(pageQuestionId));
  const keys = useRecoilValue(userAnswerKeyAtom);

  return (
    <>{isFeedbackLoading && keys[keys.length - 1] === pageQuestionId && <QuestionLoadingUI />}</>
  );
};

export default QuestionLoadingApplication;
