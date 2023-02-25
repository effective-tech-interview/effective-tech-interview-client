import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { ConfirmModal } from '~/components/common/ConfirmModal';
import Text from '~/components/common/Text';
import { useModal } from '~/hooks/useModal';

export default function Home() {
  const { openModal } = useModal();
  const onClick = async () => {
    await openModal({
      children: (
        <ConfirmModal title="로그인이 필요해요" subtitle="회원가입 후 연습을 시작할 수 있어요" />
      ),
    });
  };
  return (
    <Flex.Center direction="column">
      <Text variant="b1" color="gray600">
        AI 꼬리질문으로 준비하는 면접 연습
      </Text>
      <Spacing size={24} />
      {/* 메인 화면 이미지 */}
      <Spacing size={24} />
      <Button onClick={onClick}>시작하기</Button>
    </Flex.Center>
  );
}
