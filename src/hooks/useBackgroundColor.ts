import { useRouter } from 'next/router';

import { theme } from '~/styles/Theme';

const BACKGROUND_COLOR_GRAY = ['/category'];

const useBackGroundColor = () => {
  const { asPath } = useRouter();

  const backgroundColor = BACKGROUND_COLOR_GRAY.includes(asPath)
    ? `${theme.color.gray050}`
    : `${theme.color.gray000}`;

  return { backgroundColor };
};

export default useBackGroundColor;
