import type { ComponentProps } from 'react';

import { Icon } from '~/components/common/Icon';

import QuestionButton from './QuestionButtonUI';

const OtherQuestionButtonUI = (props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>) => {
  return (
    <QuestionButton variant="otherQuestion" data-testid="other-question-button" {...props}>
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

export { OtherQuestionButtonUI };
