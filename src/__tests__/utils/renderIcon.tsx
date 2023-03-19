import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import { Icon } from '~/components/common/Icon';

import { render, screen } from './testUtils';

export function renderIcon(props?: ComponentProps<typeof Icon>) {
  const onClick = jest.fn();

  render(<Icon data-testid="icon" iconName={props?.iconName || 'rightArrow'} onClick={onClick} />);

  const icon = () => screen.getByTestId('icon');

  async function clickIcon() {
    await userEvent.click(icon());
  }

  return { onClick, icon, clickIcon };
}
