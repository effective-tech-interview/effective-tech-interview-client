import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ChangeEvent } from 'react';

import { theme } from '~/styles/Theme';

export interface InputProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
export const InputBubble = ({ onChange, value }: InputProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onFocus = () => {
    setIsClicked(true);
  };
  const onBlur = () => {
    setIsClicked(false);
  };

  return (
    <BubbleWrapper>
      <StyledTextArea
        value={value}
        id="input"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="답변을 작성해주세요"
      />
      {isClicked ? (
        <>
          <ClickedArrow />
          <Arrow isClicked={isClicked} />
        </>
      ) : (
        <Arrow isClicked={isClicked} />
      )}
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
  border-radius: 8px 8px 0 8px;
  background: ${theme.color.gray100};
  height: 112px;
  resize: none;
  padding: 16px;
  :focus {
    outline: none;
    border: 2px solid ${theme.color.gray200};
  }
  ::placeholder {
    color: ${theme.color.gray400};
  }
`;

const Arrow = styled('div')<{ isClicked: boolean }>`
  position: absolute;
  bottom: -12px;
  ${({ isClicked }) => {
    return css`
      right: ${isClicked ? '2px' : '0'};
      bottom: ${isClicked ? '-8px' : '-12px'};
    `;
  }}
  width: 0;
  height: 0;
  border-bottom: 7px solid transparent;
  border-top: 7px solid ${theme.color.gray100};
  border-left: 6px solid transparent;
  border-right: 6px solid ${theme.color.gray100};
  z-index: 1111;
`;

const ClickedArrow = styled.div`
  position: absolute;
  bottom: -12px;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 7px solid transparent;
  border-top: 7px solid ${theme.color.gray200};
  border-left: 6px solid transparent;
  border-right: 7px solid ${theme.color.gray200};
`;
