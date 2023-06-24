import styled from '@emotion/styled';
import type { ComponentProps, PropsWithChildren } from 'react';

import Button from '~/components/common/Button';

type QuestionButtonVariants = 'otherQuestion' | 'tailQuestion' | 'nextQuestion';

interface QuestionButtonProps extends Omit<ComponentProps<typeof Button>, 'variant'> {
  variant: QuestionButtonVariants;
}

const QuestionButtonUI = ({ children, ...props }: PropsWithChildren<QuestionButtonProps>) => {
  return (
    <Button width={10.4} height={3.4} {...props}>
      <QuestionButtonContainer>{children}</QuestionButtonContainer>
    </Button>
  );
};

export default QuestionButtonUI;

const QuestionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: 'Pretendard';
`;
