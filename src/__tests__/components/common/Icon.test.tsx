import { renderIcon } from '~/__tests__/utils/renderIcon';
import { Icon } from '~/components/common/Icon';

describe('<Icon />', () => {
  it('컴포넌트가 존재해야 한다.', async () => {
    expect(Icon).toBeDefined();
  });

  it('기본 필드를 렌더링해야 한다.', async () => {
    const { icon } = renderIcon();

    expect(icon()).toBeInTheDocument();
  });

  it('아이콘이 클릭되면 onClick 함수가 호출되야 한다.', async () => {
    const { clickIcon, onClick } = renderIcon();

    await clickIcon();

    expect(onClick).toHaveBeenCalled();
  });
});
