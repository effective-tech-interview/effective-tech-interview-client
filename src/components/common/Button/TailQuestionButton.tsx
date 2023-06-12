import type { ComponentProps } from 'react';

import { Icon } from '../Icon';
import { QuestionButton } from './QuestionButton';

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

export { TailQuestionButton };
