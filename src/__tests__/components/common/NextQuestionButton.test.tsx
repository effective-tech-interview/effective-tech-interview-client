import { renderNextQuestionButton } from '~/__tests__/utils/renderNextQuestionButton';
import { NextQuestionButton } from '~/components/common/Button';

describe('<NextQuestionButton />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(NextQuestionButton).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { button } = renderNextQuestionButton();

    expect(button()).toBeInTheDocument();
  });

  it('버튼이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickButton, onClick } = renderNextQuestionButton();

    await clickButton();

    expect(onClick).toHaveBeenCalled();
  });
});
