import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import questionInputHeightAtom from '~/store/questionInputHeight/questionInputHeightAtom';
import { theme } from '~/styles/Theme';

const QuestionButtonComplexWrapperUI = ({ children }: PropsWithChildren) => {
  const questionInputHeight = useRecoilValue(questionInputHeightAtom);

  return (
    <QuestionButtonComplexWrapper height={questionInputHeight}>
      {children}
    </QuestionButtonComplexWrapper>
  );
};

export { QuestionButtonComplexWrapperUI };

const ONE_LINE_SCROLL_HEIGHT = 27;

const QuestionButtonComplexWrapper = styled('div')<{ height: number }>`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;

  position: fixed;
  bottom: ${props =>
    ONE_LINE_SCROLL_HEIGHT < props.height ? `${props.height + 50}px` : `${props.height + 71}px`};
  left: 0;
  width: 100%;

  ${theme.mediaQuery.desktop} {
    width: 360px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
