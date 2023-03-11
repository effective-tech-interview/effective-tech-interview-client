import styled from '@emotion/styled';

import { IconContainer } from '~/components/common/Header';
import { Icon } from '~/components/common/Icon';
import { useShowLoginModal } from '~/hooks/useShowLoginModal';

export const HomeHeader = () => {
  const showLoginModal = useShowLoginModal('mypage');
  return (
    <HomeHeaderWrapper>
      <IconContainer>
        <img
          alt="blue-logo"
          width={30}
          src="https://effectivetechinterview-asset.s3.ap-northeast-1.amazonaws.com/logo-blue.svg"
        />
      </IconContainer>
      <IconContainer onClick={showLoginModal}>
        <Icon iconName="user" />
      </IconContainer>
    </HomeHeaderWrapper>
  );
};

const HomeHeaderWrapper = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
