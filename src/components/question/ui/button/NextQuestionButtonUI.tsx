import { css } from '@emotion/react';
import type { ComponentProps } from 'react';

import { Icon } from '~/components/common/Icon';

import QuestionButton from './QuestionButtonUI';

const NextQuestionButtonUI = (props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>) => {
  return (
    <QuestionButton variant="nextQuestion" data-testid="next-question-button" {...props}>
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

export { NextQuestionButtonUI };

const NextQuestionButtonSpanStyle = css`
  margin: 0 8px;
`;
