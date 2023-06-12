import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';

import { QuestionButton } from '~/components/common/Button';

import { render, screen } from './testUtils';

const BUTTON_TEXT = 'Question Text';

export function renderQuestionButton(props?: ComponentProps<typeof QuestionButton>) {
  const onClick = jest.fn();

  render(
    <QuestionButton variant={props?.variant ?? 'tailQuestion'} onClick={onClick} {...props}>
      {BUTTON_TEXT}
    </QuestionButton>
  );

  const button = () => screen.getByText(BUTTON_TEXT);

  async function clickButton() {
    await userEvent.click(button());
  }

  return { onClick, button, clickButton };
}
