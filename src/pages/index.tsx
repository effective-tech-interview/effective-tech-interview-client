import Image from 'next/image';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { HomeHeader } from '~/components/common/HomeHeader';
import Text from '~/components/common/Text';
import { useShowLoginModal } from '~/hooks/useShowLoginModal';

export default function Home() {
  // TODO: redirect page 재설정하기
  const showLoginModal = useShowLoginModal('login');
  return (
    <Flex.Center direction="column">
      <HomeHeader />
      <Image
        alt="korean-logo"
        width={224}
        height={26}
        src={'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/logo-korean.svg'}
      />
      <Spacing size={16} />
      <Text variant="b1" color="gray600">
        AI 꼬리질문으로 준비하는 면접 연습
      </Text>
      <Spacing size={24} />
      <Image
        alt="main-page-image"
        width={328}
        height={328}
        src={
          'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/onboarding-1.svg'
        }
      />
      <Spacing size={64} />
      <Text variant="h2" color="gray600">
        희망 직무 선택하고
      </Text>
      <Spacing size={24} />
      <Image
        alt="main-page-image"
        width={328}
        height={328}
        src={
          'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/onboadring-2.svg'
        }
      />
      <Spacing size={64} />
      <Text variant="h2" color="gray600">
        AI 생성 질문을 받아보세요
      </Text>
      <Spacing size={24} />
      <Image
        alt="main-page-image"
        width={328}
        height={328}
        src={
          'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/onboarding-3.svg'
        }
      />
      <Spacing size={64} />
      <Text variant="h2" color="gray600">
        어려운 꼬리 질문까지 한번에
      </Text>
      <Spacing size={24} />
      <Image
        alt="main-page-image"
        width={328}
        height={328}
        src={
          'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/onboarding-4.svg'
        }
      />
      <Spacing size={100} />
      <StyledButton>
        <Button variant="largePrimary" onClick={showLoginModal}>
          시작하기
        </Button>
      </StyledButton>
    </Flex.Center>
  );
}

const StyledButton = styled.div`
  padding: 0 16px;
  width: 100%;
  position: fixed;
  bottom: 24px;
`;
