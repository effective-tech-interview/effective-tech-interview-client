import { css } from '@emotion/react';

import Question from './Question';

interface QuestionData {
  pageNumber: number;
  midCategoryId: number;
  questions: QuestionResponse[];
}

interface QuestionsProps {
  questionsData: QuestionData;
}

export const Questions = ({ questionsData }: QuestionsProps) => {
  return (
    <div css={questionsWrapperStyle}>
      {questionsData?.questions.map((questionData, index) => {
        return (
          <Question
            key={index}
            type={index === 0 ? 'normal' : 'tail'}
            questionData={questionData}
            index={index}
          />
        );
      })}
    </div>
  );
};

const questionsWrapperStyle = css`
  height: 90vh;
  overflow: scroll;
  padding-bottom: 84px;
`;
