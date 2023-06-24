import { useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ChangeEvent, MouseEvent } from 'react';

import useAutoSizeTextArea from '~/hooks/useAutoSizeTextArea';
import useSetQuestionInputHeightAtom from '~/hooks/useSetQuestionInputHeightAtom';
import { theme } from '~/styles/Theme';

import { Icon } from '../../../common/Icon';

interface InputProps {
  value: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const QuestionInputUI = ({ value, disabled, onChange, onClick }: InputProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useSetQuestionInputHeightAtom(inputRef.current);

  const { scrollHeight } = useAutoSizeTextArea(textAreaRef.current, value);

  return (
    <InputWrapper ref={inputRef} scrollHeight={scrollHeight}>
      <StyledTextArea
        ref={textAreaRef}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={disabled ? '답변을 입력할 수 없습니다' : '답변을 작성해주세요'}
      />
      <button css={ButtonStyle} disabled={disabled} onClick={onClick}>
        {value ? <Icon iconName="paperPlane" /> : <Icon iconName="paperPlaneDisabled" />}
      </button>
    </InputWrapper>
  );
};

export default QuestionInputUI;

const ONE_LINE_SCROLL_HEIGHT = 27;

const InputWrapper = styled('div')<{ scrollHeight: number }>`
  width: 100%;
  display: flex;
  align-items: end;
  background-color: ${theme.color.gray000};
  padding: 16px;
  padding-top: ${props => (props.scrollHeight > ONE_LINE_SCROLL_HEIGHT ? '16px' : '28px')};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 27px;

  border: none;
  resize: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.color.gray800};

  // Hide scroll bar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 16px;
    color: ${theme.color.gray400};
  }
`;

const ButtonStyle = css`
  margin-left: 23px;
  padding-top: 10px;
`;
