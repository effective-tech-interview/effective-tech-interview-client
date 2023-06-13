import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import { NextQuestionButton } from '~/components/common/Button';

import { render, screen } from './testUtils';

const TEST_ID = 'next-question-button';

export function renderNextQuestionButton(props?: ComponentProps<typeof NextQuestionButton>) {
  const onClick = jest.fn();

  render(<NextQuestionButton onClick={onClick} {...props} />);

  const button = () => screen.getByTestId(TEST_ID);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
