import { renderButton } from '~/__tests__/utils';
import Button from '~/components/common/Button';

describe('<Button />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(Button).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { button } = renderButton();

    expect(button()).toBeInTheDocument();
  });

  it('버튼이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickButton, onClick } = renderButton();

    await clickButton();

    expect(onClick).toHaveBeenCalled();
  });
});
