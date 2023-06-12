import type { ComponentProps } from 'react';

import { Icon } from '../Icon';
import { QuestionButton } from './QuestionButton';

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

export { OtherQuestionButton };
