import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import useMemberAnswerSubmit from '~/hooks/mutation/useMemberAnswerSubmit';
import useMemberAnswerChange from '~/hooks/useMemberAnswerChange';
import useMemberAnswerDisabled from '~/hooks/useMemberAnswerDisabled';
import useMemberAnswerKey from '~/hooks/useMemberAnswerKey';
import userAnswerAtomFamily from '~/store/userAnswer/userAnswerAtomFamily';
import { theme } from '~/styles/Theme';

import QuestionInputUI from '../../ui/input/QuestionInputUI';

interface ActionData {
  pageId: number;
  pageQuestionId: number;
}

interface Props {
  actionData: ActionData;
}

const QuestionInputApplication = ({ actionData: { pageId, pageQuestionId } }: Props) => {
  const memberAnswer = useRecoilValue(userAnswerAtomFamily(pageQuestionId));

  useMemberAnswerKey({ pageQuestionId });

  const { disabled } = useMemberAnswerDisabled({ pageQuestionId });
  const { handleChange } = useMemberAnswerChange({ pageQuestionId });
  const { handleSubmit } = useMemberAnswerSubmit({ pageId, pageQuestionId });

  return (
    <div css={InputWrapperStyle}>
      <QuestionInputUI
        value={memberAnswer}
        disabled={disabled}
        onChange={handleChange}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default QuestionInputApplication;

const InputWrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  ${theme.mediaQuery.desktop} {
    width: 360px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
