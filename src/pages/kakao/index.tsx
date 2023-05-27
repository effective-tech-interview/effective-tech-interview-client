import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

import { postKakaoCode } from '~/apis';
import { isEffError } from '~/apis/client';
import { clientUrl } from '~/components/homePage/HomeFooter';
import { useNextRouter } from '~/hooks/useNextRouter';
import { useToast } from '~/hooks/useToast';

export default function Kakao() {
  const { query } = useNextRouter({ suspense: true });

  const { openToast } = useToast();
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
          await openToast({
            type: 'danger',
            title: '카카오 로그인에 실패했습니다. ',
          });
        }
      }
    }
  });

  useEffect(() => {
    kakaoLoginMuatation();
  }, [kakaoLoginMuatation]);

  return null;
}
