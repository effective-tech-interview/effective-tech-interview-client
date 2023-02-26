import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import { Icon } from '../Icon';
import Text from '../Text';

type ColorType = 'white' | 'gray';

export interface HeaderProps {
  headerTitle: string;
  color: ColorType;
}

export const Header = ({ headerTitle, color }: HeaderProps) => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <HeaderWrapper color={color}>
      <IconContainer>
        <Icon iconName="leftArrow" onClick={onClick} />
      </IconContainer>
      <Text css={{ margin: 'auto' }} variant="b1">
        {headerTitle}
      </Text>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{ color: ColorType }>`
  display: flex;
  height: 64px;
  width: calc(100% + 16 * 2);
  margin: 0 -16px;
  padding-left: 24px;
  padding-right: 46px;
  align-items: center;
  ${({ color }) => {
    return css`
      background: ${color === 'white' ? theme.color.gray000 : theme.color.gray050};
    `;
  }};
`;

const IconContainer = styled.div`
  cursor: pointer;
`;
