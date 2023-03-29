import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IconContainer } from '~/components/common/Header';
import { Icon } from '~/components/common/Icon';
import { useShowLoginModal } from '~/hooks/useShowLoginModal';
import { theme } from '~/styles/Theme';

type ColorType = 'white' | 'gray';

interface HomeHeaderProps {
  color: ColorType;
}

export const HomeHeader = ({ color }: HomeHeaderProps) => {
  const showLoginModal = useShowLoginModal('mypage');
  return (
    <HomeHeaderWrapper color={color}>
      <IconContainer>
        <Link href="/">
          <Image
            alt="blue-logo"
            width={30}
            height={30}
            src={
              'https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/logo-blue.svg'
            }
          />
        </Link>
      </IconContainer>
      <IconContainer onClick={showLoginModal}>
        <Icon iconName="user" />
      </IconContainer>
    </HomeHeaderWrapper>
  );
};

const HomeHeaderWrapper = styled.div<{ color: ColorType }>`
  display: flex;
  height: 64px;
  width: calc(100% + 16 * 2);
  margin: 0 -16px;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  ${({ color }) => {
    return css`
      background: ${color === 'white' ? theme.color.gray000 : theme.color.gray050};
    `;
  }};
`;
