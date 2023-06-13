import Image from 'next/image';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Chip } from '~/components/common/Chip';
import { HomeHeader } from '~/components/common/HomeHeader';
import Text from '~/components/common/Text';
import { useShowLoginModal } from '~/hooks/useShowLoginModal';
import { theme } from '~/styles/Theme';

export default function Home() {
  // TODO: redirect page 재설정하기
  const showLoginModal = useShowLoginModal('category');
  return (
    <>
      <HomeHeader color="gray" />

      <ColoredBackground>
        <Chip chipType="home" text="Beta" />
        <Spacing size={12} />
        <Image
          alt="korean-logo"
          width={224}
          height={26}
          src={
            'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/logo-black.png'
          }
        />
        <Spacing size={16} />
        <Text variant="b1" color="gray600">
          ChatGPT로 준비하는 개발자 면접
        </Text>
        <Spacing size={24} />
        <Image
          alt="main-page-image"
          width={328}
          height={328}
          src={
            'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/new-onboarding1.png'
          }
        />
      </ColoredBackground>
      <Flex.Center direction="column">
        <Spacing size={64} />
        <Text variant="b2" color="gray600">
          총 23개의 개발 스택
        </Text>
        <Spacing size={12} />
        <Text variant="h2" color="gray600">
          희망 직무 맞춤 면접 연습
        </Text>
        <Spacing size={24} />
        <Image
          alt="main-page-image"
          width={328}
          height={328}
          src={
            'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/new-onboarding2.png'
          }
        />
        <Spacing size={64} />
        <Text variant="b2" color="gray600">
          비효율적인 깃허브, 블로그 서칭
        </Text>
        <Spacing size={12} />
        <Text variant="h2" color="gray600">
          구글링 없이 AI로 한번에
        </Text>
        <Spacing size={24} />
        <Image
          alt="main-page-image"
          width={328}
          height={328}
          src={
            'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/new-onboarding3.png'
          }
        />
        <Spacing size={64} />
        <Text variant="b2" color="gray600">
          내가 잘 알고 있는지 걱정된다면
        </Text>
        <Spacing size={12} />
        <Text variant="h2" color="gray600">
          AI 답변과 꼬리질문까지
        </Text>
        <Spacing size={24} />
        <Image
          alt="main-page-image"
          width={328}
          height={328}
          src={
            'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/new-onboarding4.png'
          }
        />
        <Spacing size={64} />
        <Chip chipType="default" text="업데이트 예정" />
        <Spacing size={12} />
        <Text variant="h2" color="gray600">
          내 연습 기록 복습 기능
        </Text>
        <Spacing size={24} />
        <Image
          alt="main-page-image"
          width={328}
          height={328}
          src={
            'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/new-onboarding5.png'
          }
        />
        <Spacing size={64} />
        <Flex css={{ gap: '12px' }}>
          <Text variant="b2" color="gray400">
            <a target="_blank" rel="noreferrer" href="https://forms.gle/HbexSiDB2UuqmVTPA">
              서비스 피드백 남기기
            </a>
          </Text>
          <Text variant="b2" color="gray400">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twilight-tartan-155.notion.site/8d39631d4ec74cc283322d0b96b77e98"
            >
              서비스 이용약관
            </a>
          </Text>
          <Text variant="b2" color="gray400">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twilight-tartan-155.notion.site/2b133710e4404ca08f75bcc391616452"
            >
              개인정보 보호정책
            </a>
          </Text>
        </Flex>
        <Spacing size={16} />
        <Text variant="b2" color="gray400">
          문의 | effectivetechinterview@gmail.com
        </Text>
        <Spacing size={120} />
        <StyledButton>
          <Button variant="largePrimary" onClick={showLoginModal}>
            시작하기
          </Button>
        </StyledButton>
      </Flex.Center>
    </>
  );
}

const StyledButton = styled.div`
  padding: 0 16px;
  width: 100%;
  position: fixed;
  bottom: 24px;

  ${theme.mediaQuery.desktop} {
    width: 360px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const ColoredBackground = styled.div`
  display: flex;
  width: calc(100% + 16 * 2);
  margin: 0 -16px;
  flex-direction: column;
  align-items: center;
  background: ${theme.color.gray050};
`;
