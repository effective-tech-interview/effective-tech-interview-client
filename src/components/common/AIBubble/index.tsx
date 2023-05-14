import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import { Chip } from '../Chip';
import Text from '../Text';

type QuestionType = 'normal' | 'tail';

export interface AIBubbleProps {
  questionType: QuestionType;
  question: string;
  answer?: string;
}

export const AIBubble = ({ questionType, question, answer }: AIBubbleProps) => {
  return (
    <BubbleWrapper>
      <BubbleContainer>
        {questionType === 'normal' && (
          <ChipWrapper>
            <Chip chipType="default" text="일반 질문" />
          </ChipWrapper>
        )}
        {questionType === 'tail' && (
          <ChipWrapper>
            <Chip chipType="highlight" text="꼬리 질문" />
          </ChipWrapper>
        )}
        <Text variant="b1" color="gray800">
          {question}
        </Text>
        {answer && (
          <>
            <Divider />
            <ChipWrapper>
              <Chip chipType="default" text="AI 답변" />
            </ChipWrapper>
            <Text variant="b3" color="gray600">
              {answer}
            </Text>
          </>
        )}
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
