import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import { Icon } from '../Icon';
import Text from '../Text';

type ToastProps = {
  type: 'danger' | 'success';
  title: string;
};

export function Toast({ type, title }: ToastProps) {
  return (
    <StyledToast>
      {type === 'danger' && <Icon width={20} iconName="warning" />}
      <Text variant="b1" color="gray000">
        {title}
      </Text>
    </StyledToast>
  );
}

const StyledToast = styled.div`
  position: fixed;
  cursor: default;
  // 수평 가운데 정렬
  left: 50%;
  transform: translate(-50%, 0);

  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  bottom: 40px;

  border-radius: 80px;
  padding: 12px 18px;
  background-color: ${theme.color.gray800};

  z-index: 99999;
`;
