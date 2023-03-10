import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import { SingleBottomFixedButton } from '~/components/common/Button';

import { render, screen } from './testUtils';

const BUTTON_TEXT = 'Single Bottom Fixed Button Text';

export function renderSingleBottomFixedButton(
  props?: ComponentProps<typeof SingleBottomFixedButton>
) {
  const onClick = jest.fn();

  render(
    <SingleBottomFixedButton
      variant={props?.variant ?? 'largePrimary'}
      onClick={onClick}
      {...props}
    >
      {BUTTON_TEXT}
    </SingleBottomFixedButton>
  );

  const button = () => screen.getByText(BUTTON_TEXT);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
