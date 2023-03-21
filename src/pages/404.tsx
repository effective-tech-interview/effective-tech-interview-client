import Link from 'next/link';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import Text from '~/components/common/Text';

export default function NotFound() {
  return (
    <Flex.Center direction="column">
      <Spacing size={200} />
      <Text variant="h2">죄송합니다. </Text>
      <Text variant="h2">해당 페이지를 찾을 수 없어요.</Text>
      <Spacing size={50} />
      <Text variant="subtitle">홈페이지로 이동해 면접 연습을 시작해보세요.</Text>
      <Spacing size={50} />
      <Link href={'/'}>
        <Button variant="largePrimary">면접 연습 하러가기</Button>
      </Link>
    </Flex.Center>
  );
}
