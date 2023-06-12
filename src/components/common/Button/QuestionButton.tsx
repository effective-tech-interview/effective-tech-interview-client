import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ComponentProps, PropsWithChildren } from 'react';

import { Icon } from '../Icon';
import Button from './Button';

type QuestionButtonVariants = 'otherQuestion' | 'tailQuestion' | 'nextQuestion';

interface QuestionButtonProps extends Omit<ComponentProps<typeof Button>, 'variant'> {
  variant: QuestionButtonVariants;
}

const QuestionButton = ({ children, ...props }: PropsWithChildren<QuestionButtonProps>) => {
  return (
    <Button width={12.3} height={3.4} {...props}>
      <QuestionButtonContainer>{children}</QuestionButtonContainer>
    </Button>
  );
};

const OtherQuestionButton = (props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>) => {
  return (
    <QuestionButton variant="otherQuestion" {...props}>
      <Icon
        iconName="refresh"
        size="eachSize"
        height={16}
        wrapperProps={{ style: { height: 16, marginTop: 1, marginRight: 3 } }}
      />
      <span>다른 질문</span>
    </QuestionButton>
  );
};

const TailQuestionButton = (props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>) => {
  return (
    <QuestionButton variant="tailQuestion" {...props}>
      <Icon
        iconName="chatConversation"
        size="eachSize"
        height={16}
        wrapperProps={{ style: { height: 16, marginTop: 1, marginRight: 3 } }}
      />
      <span>꼬리 질문</span>
    </QuestionButton>
  );
};

const NextQuestionButton = (props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>) => {
  return (
    <QuestionButton variant="nextQuestion" {...props}>
      <span css={NextQuestionButtonSpanStyle}>다음 질문</span>
      <Icon
        iconName="right"
        size="eachSize"
        height={16}
        wrapperProps={{ style: { height: 16, marginTop: 1 } }}
      />
    </QuestionButton>
  );
};

export { NextQuestionButton, OtherQuestionButton, QuestionButton, TailQuestionButton };

const QuestionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: 'Pretendard';
`;

const NextQuestionButtonSpanStyle = css`
  margin: 0 12px;
`;
