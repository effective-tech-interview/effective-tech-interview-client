import { css } from '@emotion/react';
import type { ComponentProps } from 'react';

import { Icon } from '../Icon';
import { QuestionButton } from './QuestionButton';

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

export { NextQuestionButton };

const NextQuestionButtonSpanStyle = css`
  margin: 0 12px;
`;
