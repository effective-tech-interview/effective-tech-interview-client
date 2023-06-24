import { renderOtherQuestionButton } from '~/__tests__/utils/renderOtherQuestionButton';
import { OtherQuestionButtonUI } from '~/components/question/ui/button';

describe('<OtherQuestionButton />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(OtherQuestionButtonUI).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { button } = renderOtherQuestionButton();

    expect(button()).toBeInTheDocument();
  });

  it('버튼이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickButton, onClick } = renderOtherQuestionButton();

    await clickButton();

    expect(onClick).toHaveBeenCalled();
  });
});
