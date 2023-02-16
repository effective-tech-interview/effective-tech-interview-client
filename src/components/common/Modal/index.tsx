import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { theme } from '~/styles/Theme';

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
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
