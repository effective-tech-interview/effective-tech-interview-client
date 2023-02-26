import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { postLogin } from '~/apis';
import { isEffError } from '~/apis/client';
import { emailPattern, passwordPattern } from '~/constants/validationPattern';

interface CheckLoginForm {
  email: string;
  password: string;
}

export const useCheckLoginForm = () => {
  const {
    register,
    getValues,
    formState: { isDirty, isValid },
  } = useForm<CheckLoginForm>({ mode: 'onBlur' });

  const isEmailPattern = useCallback(() => {
    return {
      value: emailPattern,
      message: '올바른 이메일을 입력해주세요',
    };
  }, []);

  const isPasswordPattern = useCallback(() => {
    return {
      value: passwordPattern,
      message: '숫자와 한글만 입력해주세요.',
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
    } catch (error: unknown) {
      if (isEffError(error)) {
        // TODO: toast 추가
        console.log(error.message, error.errorCode);
      }
    }
  });

  return { register, isDisabled, isEmailPattern, isPasswordPattern, loginMutation, isRequiredText };
};
