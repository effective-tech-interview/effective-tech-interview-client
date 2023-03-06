import { useRouter } from 'next/router';

import { authToken } from '~/apis/client';
import { ConfirmModal } from '~/components/common/ConfirmModal';

import { useModal } from './useModal';

export function useShowLoginModal() {
  const { openModal } = useModal();
  const router = useRouter();

  const showLoginModal = async () => {
    if (authToken.access && authToken.refresh) {
      // TODO: 리다이렉트 페이지 바꾸기
      router.push('/');
    } else {
      await openModal({
        children: (
          <ConfirmModal title="로그인이 필요해요" subtitle="회원가입 후 연습을 시작할 수 있어요" />
        ),
      });
    }
  };

  return showLoginModal;
}
