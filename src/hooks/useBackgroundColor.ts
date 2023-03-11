import { useRouter } from 'next/router';

import { theme } from '~/styles/Theme';

const BACKGROUND_COLOR_GRAY = ['/category', '/questions/[categoryId]'];

const useBackGroundColor = () => {
  const { pathname } = useRouter();

  const backgroundColor = BACKGROUND_COLOR_GRAY.includes(pathname)
    ? `${theme.color.gray050}`
    : `${theme.color.gray000}`;

  return { backgroundColor };
};

export default useBackGroundColor;
