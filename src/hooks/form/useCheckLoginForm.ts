import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { postLogin } from '~/apis';
import { authToken, isEffError } from '~/apis/client';
import { emailPattern, passwordPattern } from '~/constants/validationPattern';

import { useToast } from '../useToast';

interface CheckLoginForm {
  email: string;
  password: string;
}

export const useCheckLoginForm = () => {
  const {
    register,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<CheckLoginForm>({ mode: 'onBlur' });

  const { openToast } = useToast();
  const router = useRouter();

  const isEmailPattern = useCallback(() => {
    return {
      value: emailPattern,
      message: '올바른 이메일을 입력해주세요',
    };
  }, []);

  const isPasswordPattern = useCallback(() => {
    return {
      value: passwordPattern,
      message: '숫자와 영문 조합으로 입력해주세요',
    };
  }, []);

  const isDisabled = !isDirty || !isValid;

  const isRequiredText = useCallback(
    (text: string) => (text === '비밀번호' ? `${text}를 입력해주세요.` : `${text}을 입력해주세요.`),
    []
  );

  const { mutate: loginMutation } = useMutation(async () => {
    const { email, password } = getValues();
    try {
      const data = await postLogin(email, password);
      if (data) {
        const { accessToken, refreshToken } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      }
      if (authToken.access && authToken.refresh) {
        router.push('/category');
      }
    } catch (error: unknown) {
      if (isEffError(error)) {
        // TODO: toast 추가
        await openToast({
          type: 'danger',
          title: '이메일 또는 비밀번호가 다릅니다',
        });
      }
    }
  });

  return {
    register,
    isDisabled,
    isEmailPattern,
    isPasswordPattern,
    loginMutation,
    isRequiredText,
    errors,
  };
};
