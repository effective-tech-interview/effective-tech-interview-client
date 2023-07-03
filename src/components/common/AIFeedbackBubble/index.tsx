import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import { Chip } from '../Chip';
import Text from '../Text';

export interface AIBubbleProps {
  positive: string;
  improvement: string;
}

export const AIFeedbackBubble = ({ positive, improvement }: AIBubbleProps) => {
  return (
    <BubbleWrapper>
      <BubbleContainer>
        <ChipWrapper>
          <Chip chipType="highlight" text="AI 피드백" />
        </ChipWrapper>
        <Text variant="b3" color="primary_default">
          {'좋은 점'}
        </Text>
        <Text variant="b3" color="gray800">
          {positive}
        </Text>
        <Text variant="b3" color="system_default">
          {'개선할 점'}
        </Text>
        <Text variant="b3" color="gray800">
          {improvement}
        </Text>
      </BubbleContainer>
    </BubbleWrapper>
  );
};

export const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  width: 100%;
  background: ${theme.color.gray000};
  word-break: break-all;
  border-radius: 12px 12px 12px 0px;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${theme.color.gray100};
`;

const ChipWrapper = styled.div`
  width: max-content;
`;
