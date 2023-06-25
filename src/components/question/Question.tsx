import { Spacing } from '@toss/emotion-utils';

import { AIBubble } from '../common/AIBubble';
import { AIFeedbackBubble } from '../common/AIFeedbackBubble';
import { UserBubble } from '../common/UserBubble';
import QuestionLoadingApplication from './application/loading/QuestionLoadingApplication';

interface QuestionProps {
  type: 'normal' | 'tail';
  index: number;
  questionData: QuestionResponse;
}

// const TOTAL_TAIL_QUESTION_NUMBER = 3;

const Question = ({ type, questionData }: QuestionProps) => {
  return (
    <>
      <AIBubble
        questionType={type}
        question={questionData.question}
        answer={questionData.aiAnswer}
      />
      <Spacing size={20} />
      {questionData.memberAnswer && <UserBubble userAnswer={questionData.memberAnswer} />}
      <Spacing size={20} />
      <QuestionLoadingApplication pageQuestionId={questionData.pageQuestionId} />
      {questionData.feedback && (
        <AIFeedbackBubble
          advantage={questionData.feedback.split('\n\n')[0].split('좋은 점: ')[1]}
          improvements={questionData.feedback.split('\n\n')[1].split('개선할 점: ')[1]}
        />
      )}
      <Spacing size={20} />
    </>
  );
};

export default Question;
