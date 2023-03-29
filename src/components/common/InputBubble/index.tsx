import styled from '@emotion/styled';
import type { ChangeEvent } from 'react';

import { theme } from '~/styles/Theme';

export interface InputProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
export const InputBubble = ({ onChange, value }: InputProps) => {
  return (
    <BubbleWrapper>
      <StyledTextArea
        value={value}
        id="input"
        onChange={onChange}
        placeholder="답변을 작성해주세요"
      />
    </BubbleWrapper>
  );
};

const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  border: none;
  //font 설정
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.color.gray800};

  line-height: 24px;
  border-radius: 12px 12px 0 12px;
  background: ${theme.color.gray100};
  height: 112px;
  resize: none;
  padding: 16px;
  :focus {
    outline: none;
    border: 2px solid ${theme.color.gray200};
  }
  ::placeholder {
    font-size: 16px;
    color: ${theme.color.gray400};
  }
`;
