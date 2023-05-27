import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button/Button';
import { Icon } from '~/components/common/Icon';
import Text from '~/components/common/Text/Text';

import { ButtonDescriptionContainer, HomeFooterWrapper, StyledText } from './style';

type HomeFooterProps = {
  onClick: () => void;
};

export const HomeFooter = ({ onClick }: HomeFooterProps) => {
  return (
    <HomeFooterWrapper>
      <Button variant="kakaoLogin">
        <ButtonDescriptionContainer>
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
