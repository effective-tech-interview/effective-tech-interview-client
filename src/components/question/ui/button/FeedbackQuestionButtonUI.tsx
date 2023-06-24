import type { ComponentProps } from 'react';

import { Icon } from '~/components/common/Icon';

import QuestionButton from './QuestionButtonUI';

const FeedbackQuestionButtonUI = (
  props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>
) => {
  return (
    <QuestionButton variant="otherQuestion" data-testid="other-question-button" {...props}>
      <Icon
        iconName="chatDots"
        size="eachSize"
        height={16}
        wrapperProps={{ style: { height: 16, marginTop: 1, marginRight: 3 } }}
      />
      <span>AI 피드백</span>
    </QuestionButton>
  );
};

export { FeedbackQuestionButtonUI };
