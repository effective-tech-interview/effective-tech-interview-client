import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

import { postKakaoCode } from '~/apis';
import { isEffError } from '~/apis/client';
import { clientUrl } from '~/components/homePage/HomeFooter';
import { useNextRouter } from '~/hooks/useNextRouter';

export default function Kakao() {
  const { query } = useNextRouter({ suspense: true });

  const code = query.code;
  const router = useRouter();
  const redirectUri = `${clientUrl}kakao`;

  const { mutate: kakaoLoginMuatation } = useMutation(async () => {
    if (typeof code === 'string') {
      try {
        const data = await postKakaoCode(code, redirectUri);
        const { accessToken } = data;
        localStorage.setItem('accessToken', accessToken);
        router.push('/category');
      } catch (error: unknown) {
        if (isEffError(error)) {
          console.log(error);
        }
      }
    }
  });

  useEffect(() => {
    kakaoLoginMuatation();
  }, [kakaoLoginMuatation]);

  return null;
}
