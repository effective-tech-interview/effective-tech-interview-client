import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import { OtherQuestionButtonUI } from '~/components/question/ui/button';

import { render, screen } from './testUtils';

const TEST_ID = 'other-question-button';

export function renderOtherQuestionButton(props?: ComponentProps<typeof OtherQuestionButtonUI>) {
  const onClick = jest.fn();

  render(<OtherQuestionButtonUI onClick={onClick} {...props} />);

  const button = () => screen.getByTestId(TEST_ID);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
