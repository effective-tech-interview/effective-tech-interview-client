import { useState } from 'react';
import { Spacing } from '@toss/emotion-utils';

import { useDidUpdate } from '~/hooks/common/useDidUpdate';
import { useSaveQuestionAnswerMutation } from '~/hooks/mutation/useSaveQuestionAnswerMutation';
import { useQuestionsQuery } from '~/hooks/query/useQuestionsQuery';

import { AIBubble } from '../common/AIBubble';
import { DoubleBottomFixedButton, SingleBottomFixedButton } from '../common/Button';
import { InputBubble } from '../common/InputBubble';
import { UserBubble } from '../common/UserBubble';

interface QuestionProps {
  type: 'normal' | 'tail';
  index: number;
  pageId: number;
  midCategoryId: number;
}

const TOTAL_TAIL_QUESTION_NUMBER = 3;

export const Question = ({ type, index, pageId, midCategoryId }: QuestionProps) => {
  const { data: questionsData, refetch: questionsRefetch } = useQuestionsQuery(
    pageId,
    midCategoryId
  );
  const { mutate: saveQuestionAnswerMutate, isSuccess: saveQuestionAnswerIsSuccess } =
    useSaveQuestionAnswerMutation();

  useDidUpdate(() => {
    if (saveQuestionAnswerIsSuccess) questionsRefetch();
  }, [saveQuestionAnswerIsSuccess]);

  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNextQuestion, setIsNextQuestion] = useState(false);

  if (!questionsData) return <></>;

  return (
    <>
      <AIBubble
        questionType={type}
        question={questionsData.questions[index].question}
        answer={isSubmitted ? questionsData.questions[index].aiAnswer : ''}
      />
      <Spacing size={20} />
      {isSubmitted ? (
        <>
          <UserBubble userAnswer={answer} />
          {!isNextQuestion && (
            <DoubleBottomFixedButton
              variant="largePrimary"
              onClick={() => {
                setIsNextQuestion(true);
                saveQuestionAnswerMutate({
                  pageId: questionsData.pageId,
                  questionId: questionsData.questions[index].pageQuestionId,
                  memberAnswer: answer,
                });
              }}
            >
              꼬리 질문
            </DoubleBottomFixedButton>
          )}
          {index === TOTAL_TAIL_QUESTION_NUMBER && (
            <DoubleBottomFixedButton variant="largePrimary" disabled={true}>
              꼬리 질문
            </DoubleBottomFixedButton>
          )}
        </>
      ) : (
        <>
          <InputBubble onChange={e => setAnswer(e.target.value)} value={answer} />
          <SingleBottomFixedButton
            variant="largePrimary"
            disabled={Boolean(!answer)}
            onClick={() => setIsSubmitted(true)}
          >
            작성완료
          </SingleBottomFixedButton>
        </>
      )}
      <Spacing size={20} />
    </>
  );
};
