import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import Text from '../Text';

type ToastProps = {
  type: 'danger' | 'success';
  title: string;
};

export function Toast({ type, title }: ToastProps) {
  return (
    <StyledToast>
      <Text variant="subtitle" color={type === 'danger' ? 'system_default' : 'primary_default'}>
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

  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  top: 10px;

  border-radius: 16px;
  padding: 12px 26px;
  background-color: ${theme.color.gray000};

  z-index: 99999;
`;
