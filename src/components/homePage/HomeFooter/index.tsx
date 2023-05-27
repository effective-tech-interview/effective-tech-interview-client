import { useRouter } from 'next/router';
import { Spacing } from '@toss/emotion-utils';

import { DEV_SERVER_URL, PROD_SERVER_URL } from '~/apis/client';
import Button from '~/components/common/Button/Button';
import { Icon } from '~/components/common/Icon';
import Text from '~/components/common/Text/Text';

import { ButtonDescriptionContainer, HomeFooterWrapper, StyledText } from './style';

type HomeFooterProps = {
  onClick: () => void;
};

export const HomeFooter = ({ onClick }: HomeFooterProps) => {
  const router = useRouter();

  const baseUrl = process.env.NODE_ENV === 'development' ? DEV_SERVER_URL : PROD_SERVER_URL;
  const clientUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_DEVELOPMENT_CLIENT_URL
      : process.env.NEXT_PUBLIC_PRODUCTION_CLIENT_URL;

  const handleKakaoLogin = async () => {
    router.push(`${baseUrl}/v1/signup/oauth2/kakao/?redirectUri=${clientUrl}kakao`);
  };

  return (
    <HomeFooterWrapper>
      <Button variant="kakaoLogin">
        <ButtonDescriptionContainer onClick={handleKakaoLogin}>
          <Icon height={21} width={25} iconName="kakao" />
          카카오톡으로 시작하기
        </ButtonDescriptionContainer>
      </Button>
      <Spacing size={12} />
      <StyledText>
        <Text variant="b1" color="gray600" onClick={onClick}>
          이메일로 시작하기
        </Text>
      </StyledText>
    </HomeFooterWrapper>
  );
};
