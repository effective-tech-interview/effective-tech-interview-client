import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

import { theme } from '~/styles/Theme';

export function Modal({ children }: PropsWithChildren) {
  return <StyledModal>{children}</StyledModal>;
}

const StyledModal = styled.div`
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  background-color: ${theme.color.gray000};
  display: flex;
  flex-direction: column;
  width: 328px;
  margin: auto;
`;
