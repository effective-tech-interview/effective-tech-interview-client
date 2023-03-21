import { useRouter } from 'next/router';
import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import Text from '~/components/common/Text';

export const SignUpModal = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/login');
  };
  return (
    <>
      <Text variant="subtitle">가입된 회원입니다. </Text>
      <Spacing size={8} />
      <Text variant="b1" color="gray600">
        이미 회원가입된 이메일이에요
      </Text>
      <Spacing size={24} />
      <Button variant="largeSecondary" onClick={onClick}>
        로그인
      </Button>
    </>
  );
};
