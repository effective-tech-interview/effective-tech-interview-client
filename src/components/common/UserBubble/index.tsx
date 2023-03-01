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
      <Arrow />
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
  border-radius: 8px 8px 0px 8px;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: -12px;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 6px solid transparent;
  border-top: 6px solid ${theme.color.primary_default};
  border-left: 6px solid transparent;
  border-right: 6px solid ${theme.color.primary_default};
`;
