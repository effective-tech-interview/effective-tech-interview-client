import styled from '@emotion/styled';
import type { ComponentProps, PropsWithChildren } from 'react';

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

export { QuestionButton };

const QuestionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: 'Pretendard';
`;
