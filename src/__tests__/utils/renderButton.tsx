import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import Button from '~/components/common/Button';

import { render, screen } from './testUtils';

const BUTTON_TEXT = 'Button Text';

export function renderButton(props?: ComponentProps<typeof Button>) {
  const onClick = jest.fn();

  render(
    <Button variant={props?.variant ?? 'largePrimary'} onClick={onClick} {...props}>
      {BUTTON_TEXT}
    </Button>
  );

  const button = () => screen.getByText(BUTTON_TEXT);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
