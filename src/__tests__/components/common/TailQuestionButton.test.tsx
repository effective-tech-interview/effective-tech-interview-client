import { renderTailQuestionButton } from '~/__tests__/utils/renderTailQuestionButton';
import { TailQuestionButton } from '~/components/common/Button';

describe('<TailQuestionButton />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(TailQuestionButton).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { button } = renderTailQuestionButton();

    expect(button()).toBeInTheDocument();
  });

  it('버튼이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickButton, onClick } = renderTailQuestionButton();

    await clickButton();

    expect(onClick).toHaveBeenCalled();
  });
});
