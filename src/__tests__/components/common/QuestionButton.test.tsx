import { renderQuestionButton } from '~/__tests__/utils/renderQuestionButton';
import QuestionButton from '~/components/question/ui/button/QuestionButtonUI';

describe('<QuestionButton />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(QuestionButton).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { button } = renderQuestionButton();

    expect(button()).toBeInTheDocument();
  });

  it('버튼이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickButton, onClick } = renderQuestionButton();

    await clickButton();

    expect(onClick).toHaveBeenCalled();
  });
});
