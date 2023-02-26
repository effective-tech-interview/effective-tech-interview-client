import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { postEmail, postEmailAndCode, postSignUp } from '~/apis';
import { ConfirmModal } from '~/components/common/ConfirmModal';
import { emailPattern, passwordPattern } from '~/constants/validationPattern';

import { useModal } from '../useModal';

interface CheckSignUpForm {
  email: string;
  verificationCode: number;
  password: string;
  confirmPassword: string;
}

export const useCheckSignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isDirty, isValid, errors },
    getValues,
  } = useForm<CheckSignUpForm>({ mode: 'onBlur' });
  const router = useRouter();
  const { openModal } = useModal();

  const isDisabled = !isDirty || !isValid;

  //validation check
  const isRequiredText = useCallback(
    (text: string) => (text === '비밀번호' ? `${text}를 입력해주세요.` : `${text}을 입력해주세요.`),
    []
  );

  const isMinLength = useCallback((minLength: number) => {
    return {
      value: minLength,
      message: `${minLength}자 이상 입력해주세요.`,
    };
  }, []);

  const isMaxLength = useCallback((maxLength: number) => {
    return {
      value: maxLength,
      message: `${maxLength}자 이내로 입력해주세요.`,
    };
  }, []);

  const isEmailPattern = useCallback(() => {
    return {
      value: emailPattern,
      message: '올바른 이메일을 입력해주세요',
    };
  }, []);

  const isPasswordPattern = useCallback(() => {
    return {
      value: passwordPattern,
      message: '숫자와 영문만 입력해주세요.',
    };
  }, []);

  // submit
  const { mutate: createVerificationCodeMutation } = useMutation(async () => {
    const { email } = getValues();
    try {
      postEmail(email);
    } catch (error: unknown) {
      console.log(error);
    }
  });

  const { mutate: checkVerificationCodeMutation } = useMutation(async () => {
    const { email, verificationCode } = getValues();

    try {
      await postEmailAndCode(email, verificationCode);
      router.push(`/signup/password/${email}`);
    } catch (error: unknown) {
      console.log(error);
    }
  });

  const { mutate: completeSignUpMutation } = useMutation(async (email: string) => {
    const { password, confirmPassword } = getValues();
    try {
      await postSignUp(email, password, confirmPassword);

      await openModal({
        children: <ConfirmModal title="회원가입 완료" subtitle="기술면접 연습을 시작해볼까요?" />,
      });
    } catch (error: unknown) {
      console.log(error);
    }
  });

  return {
    register,
    handleSubmit,
    setError,
    isDisabled,
    getValues,
    createVerificationCodeMutation,
    checkVerificationCodeMutation,
    completeSignUpMutation,
    errors,
    isRequiredText,
    isMinLength,
    isEmailPattern,
    isPasswordPattern,
    isMaxLength,
  };
};
