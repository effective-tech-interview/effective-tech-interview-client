import type { ComponentProps } from 'react';

import { Icon } from '~/components/common/Icon';

import QuestionButton from './QuestionButtonUI';

const TailQuestionButtonUI = (props: Omit<ComponentProps<typeof QuestionButton>, 'variant'>) => {
  return (
    <QuestionButton variant="tailQuestion" data-testid="tail-question-button" {...props}>
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

export { TailQuestionButtonUI };
