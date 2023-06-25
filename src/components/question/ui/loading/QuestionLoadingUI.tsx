import styled from '@emotion/styled';
import Lottie from 'lottie-react';

import { theme } from '~/styles/Theme';

import loading from '../../../../../public/loading.json';

const QuestionLoadingUI = () => {
  return (
    <BubbleContainer>
      <Lottie animationData={loading} />
    </BubbleContainer>
  );
};

export default QuestionLoadingUI;

export const BubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 82px;
  height: 52px;
  padding-bottom: 10px;
  background: ${theme.color.gray000};
  border-radius: 12px 12px 12px 0px;
`;
