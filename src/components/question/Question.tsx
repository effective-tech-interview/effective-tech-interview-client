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
      {questionData.positiveFeedback && (
        <AIFeedbackBubble
          positive={questionData.positiveFeedback}
          improvement={questionData.improvementFeedback}
        />
      )}
      <Spacing size={20} />
    </>
  );
};

export default Question;
