import { useRouter } from 'next/router';

import { authToken } from '~/apis/client';
import { ConfirmModal } from '~/components/common/ConfirmModal';

import { useModal } from './useModal';

export function useShowLoginModal(redirectUrl?: string) {
  const { openModal } = useModal();
  const router = useRouter();

  const showLoginModal = async () => {
    if (authToken.access && authToken.refresh) {
      router.push(`/${redirectUrl}`);
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
