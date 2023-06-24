import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import { TailQuestionButtonUI } from '~/components/question/ui/button';

import { render, screen } from './testUtils';

const TEST_ID = 'tail-question-button';

export function renderTailQuestionButton(props?: ComponentProps<typeof TailQuestionButtonUI>) {
  const onClick = jest.fn();

  render(<TailQuestionButtonUI onClick={onClick} {...props} />);

  const button = () => screen.getByTestId(TEST_ID);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
