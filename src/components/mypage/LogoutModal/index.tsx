import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { Flex, Spacing } from '@toss/emotion-utils';

import { postLogout } from '~/apis';
import { authToken } from '~/apis/client';
import Button from '~/components/common/Button';
import Text from '~/components/common/Text';

type LogoutModalProps = {
  close: () => void;
};

const GOOGLE_FORM = 'https://forms.gle/HbexSiDB2UuqmVTPA';

export const LogoutModal = ({ close }: LogoutModalProps) => {
  const router = useRouter();

  const { mutateAsync: logoutMutation } = useMutation(async () => {
    try {
      await postLogout();
      authToken.destroy();
      await router.push('/');
    } catch (err) {
      console.log(err);
    }
  });
  const onCancelClick = () => {
    close();
  };
  const onLogoutClick = () => {
    logoutMutation();
  };
  return (
    <>
      <Text variant="subtitle">정말 로그아웃 하시겠어요? </Text>
      <Spacing size={8} />
      <Text variant="b1" color="gray600">
        내 연습 기록이 삭제됩니다.
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
