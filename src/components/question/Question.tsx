import { Spacing } from '@toss/emotion-utils';

import { AIBubble } from '../common/AIBubble';
import { UserBubble } from '../common/UserBubble';

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
    </>
  );
};

export default Question;
