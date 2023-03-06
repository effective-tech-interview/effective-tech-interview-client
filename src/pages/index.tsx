import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import Text from '~/components/common/Text';
import { HomeHeader } from '~/components/homePage/HomeHeader';
import { useShowLoginModal } from '~/hooks/useShowLoginModal';

export default function Home() {
  const showLoginModal = useShowLoginModal();
  return (
    <Flex.Center direction="column">
      <HomeHeader />
      <img
        alt="korean-logo"
        width={224}
        src="https://effectivetechinterview-asset.s3.ap-northeast-1.amazonaws.com/logo-korean.svg"
      />
      <Spacing size={16} />
      <Text variant="b1" color="gray600">
        AI 꼬리질문으로 준비하는 면접 연습
      </Text>
      <Spacing size={24} />
      <img
        alt="main-page-image"
        width={328}
        height={328}
        src="https://effectivetechinterview-asset.s3.ap-northeast-1.amazonaws.com/mainPage.png"
      />
      <Spacing size={24} />
      <Button variant="largePrimary" onClick={showLoginModal}>
        시작하기
      </Button>
    </Flex.Center>
  );
}
