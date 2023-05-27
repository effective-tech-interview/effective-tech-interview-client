import styled from '@emotion/styled';

import Button from '~/components/common/Button/Button';
import Text from '~/components/common/Text/Text';

type HomeFooterProps = {
  onClick: () => void;
};

export const HomeFooter = ({ onClick }: HomeFooterProps) => {
  return (
    <HomeFooterWrapper>
      <Button variant="kakaoLogin">카카오톡으로 시작하기</Button>
      <Text variant="b1" color="gray600" onClick={onClick}>
        이메일로 시작하기
      </Text>
    </HomeFooterWrapper>
  );
};

const HomeFooterWrapper = styled.div``;
