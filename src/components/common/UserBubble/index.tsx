import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import Text from '../Text';

type UserBubbleProps = {
  userAnswer: string;
};

export const UserBubble = ({ userAnswer }: UserBubbleProps) => {
  return (
    <BubbleWrapper>
      <BubbleContainer>
        <Text variant="b1" color="gray000">
          {userAnswer}
        </Text>
      </BubbleContainer>
    </BubbleWrapper>
  );
};

const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  width: 100%;
  background: ${theme.color.primary_default};
  word-break: break-all;
  border-radius: 12px 12px 0px 12px;
`;
