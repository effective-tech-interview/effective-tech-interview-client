import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import QuestionButtonUI from '~/components/question/ui/button/QuestionButtonUI';

import { render, screen } from './testUtils';

const BUTTON_TEXT = 'Question Text';

export function renderQuestionButton(props?: ComponentProps<typeof QuestionButtonUI>) {
  const onClick = jest.fn();

  render(
    <QuestionButtonUI variant={props?.variant ?? 'tailQuestion'} onClick={onClick} {...props}>
      {BUTTON_TEXT}
    </QuestionButtonUI>
  );

  const button = () => screen.getByText(BUTTON_TEXT);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
