import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import questionInputHeightAtom from '~/store/questionInputHeight/questionInputHeightAtom';
import { theme } from '~/styles/Theme';

const QuestionButtonSimpleWrapperUI = ({ children }: PropsWithChildren) => {
  const questionInputHeight = useRecoilValue(questionInputHeightAtom);

  return (
    <QuestionButtonSimpleWrapper height={questionInputHeight}>
      {children}
    </QuestionButtonSimpleWrapper>
  );
};

export { QuestionButtonSimpleWrapperUI };

const ONE_LINE_SCROLL_HEIGHT = 27;

const QuestionButtonSimpleWrapper = styled('div')<{ height: number }>`
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: ${props =>
    ONE_LINE_SCROLL_HEIGHT < props.height ? `${props.height + 50}px` : `${props.height + 71}px`};
  left: 0;
  width: 100%;
  /* background-color: ${theme.color.gray000}; */
  /* padding: 1.6rem; */

  ${theme.mediaQuery.desktop} {
    width: 360px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
