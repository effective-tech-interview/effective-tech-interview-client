import { useRouter } from 'next/router';
import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import Text from '~/components/common/Text';

export function ConfirmModal() {
  const router = useRouter();
  const onClick = () => {
    router.push('/login');
  };
  return (
    <>
      <Text variant="subtitle">로그인이 필요해요</Text>
      <Spacing size={8} />
      <Text variant="b1">회원가입 후 연습을 시작할 수 있어요</Text>
      <Spacing size={24} />
      <Button onClick={onClick}>확인</Button>
    </>
  );
}
