import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
  return <div>{children}</div>;
}
