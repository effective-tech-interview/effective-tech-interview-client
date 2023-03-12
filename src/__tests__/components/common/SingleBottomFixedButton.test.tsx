import { renderSingleBottomFixedButton } from '~/__tests__/utils/renderSingleBottomFixedButton';
import { SingleBottomFixedButton } from '~/components/common/Button';

describe('<SingleBottomFixedButton />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(SingleBottomFixedButton).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { button } = renderSingleBottomFixedButton();

    expect(button()).toBeInTheDocument();
  });

  it('버튼이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickButton, onClick } = renderSingleBottomFixedButton();

    await clickButton();

    expect(onClick).toHaveBeenCalled();
  });
});
