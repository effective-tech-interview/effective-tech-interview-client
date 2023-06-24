import { useRouter } from 'next/router';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useSetRecoilState } from 'recoil';

import Button from '~/components/common/Button';
import Text from '~/components/common/Text';
import userAnswerResetSelector from '~/store/userAnswerReset/userAnswerResetSelector';

type GoBackModalProps = {
  close: () => void;
};

const GOOGLE_FORM = 'https://forms.gle/HbexSiDB2UuqmVTPA';

export const GoBackModal = ({ close }: GoBackModalProps) => {
  const router = useRouter();

  const resetUserAnswer = useSetRecoilState(userAnswerResetSelector);

  const onCancelClick = () => {
    close();
  };
  const onLogoutClick = () => {
    resetUserAnswer(1);
    router.back();
  };
  return (
    <>
      <Text variant="subtitle">면접 연습 끝내기</Text>
      <Spacing size={8} />
      <Text variant="b1" color="gray600">
        질문과 답변이 모두 사라집니다.
      </Text>
      <Spacing size={24} />
      <Flex css={{ gap: '8px' }}>
        <Button variant="largeSecondary" onClick={onCancelClick}>
          취소
        </Button>
        <Button variant="largeSystem" onClick={onLogoutClick}>
          끝내기
        </Button>
      </Flex>
      <Spacing size={24} />
      <Text
        css={{ cursor: 'pointer' }}
        variant="b2"
        color="gray400"
        onClick={() => router.push(GOOGLE_FORM)}
      >
        면접 연습, 어떠셨나요?
      </Text>
    </>
  );
};
