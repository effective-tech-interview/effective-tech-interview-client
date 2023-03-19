import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import {
  postEmail,
  postEmailAndCode,
  postEmailAndCodeforResetPassword,
  postEmailforResetPassword,
  postResetPassword,
  postSignUp,
} from '~/apis';
import { isEffError } from '~/apis/client';
import { ConfirmModal } from '~/components/common/ConfirmModal';
import { SignUpModal } from '~/components/signup/SignUpModal';
import { emailPattern, passwordPattern, verificatonPattern } from '~/constants/validationPattern';

import { useModal } from '../useModal';
import { useToast } from '../useToast';

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
  const { openToast } = useToast();

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
      message: '숫자와 영문 조합으로 입력해주세요.',
    };
  }, []);

  const isVerificationpattern = useCallback(() => {
    return {
      value: verificatonPattern,
      message: '숫자만 입력해주세요.',
    };
  }, []);

  // submit
  const { mutate: createVerificationCodeMutation } = useMutation(async () => {
    const { email } = getValues();
    try {
      await postEmail(email);
      await openToast({
        type: 'success',
        title: '메일함에 인증코드가 발송되었습니다.',
      });
    } catch (error: unknown) {
      if (isEffError(error) && error.message === 'the email is already registered') {
        await openModal({ children: <SignUpModal /> });
      }
    }
  });

  const { mutate: checkVerificationCodeMutation } = useMutation(async () => {
    const { email, verificationCode } = getValues();
    try {
      await postEmailAndCode(email, verificationCode);
      router.push(`/signup/password/${email}`);
    } catch (error: unknown) {
      if (isEffError(error)) {
        await openToast({
          type: 'danger',
          title: `${error.message}`,
        });
      }
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
      if (isEffError(error)) {
        await openToast({
          type: 'danger',
          title: `${error.message}`,
        });
      }
    }
  });

  //reset password
  const { mutate: createVerificationCodeforResetMutation } = useMutation(async () => {
    const { email } = getValues();
    try {
      await postEmailforResetPassword(email);
      await openToast({
        type: 'success',
        title: '메일함에 인증코드가 발송되었습니다.',
      });
    } catch (error: unknown) {
      if (isEffError(error) && error.message === 'member not found') {
        await openToast({
          type: 'danger',
          title: '가입된 이메일이 아닙니다. ',
        });
      } else if (isEffError(error)) {
        await openToast({
          type: 'danger',
          title: `${error.message}`,
        });
      }
    }
  });

  const { mutate: checkVerificationCodeforResetMutation } = useMutation(async () => {
    const { email, verificationCode } = getValues();

    try {
      await postEmailAndCodeforResetPassword(email, verificationCode);
      router.push(`/find/${email}`);
    } catch (error: unknown) {
      if (isEffError(error)) {
        await openToast({
          type: 'danger',
          title: `${error.message}`,
        });
      }
    }
  });

  const { mutate: completeResetPassword } = useMutation(async (email: string) => {
    const { password, confirmPassword } = getValues();
    try {
      await postResetPassword(email, password, confirmPassword);

      await openModal({
        children: (
          <ConfirmModal title="비밀번호 재설정 완료" subtitle="기술면접 연습을 시작해볼까요?" />
        ),
      });
    } catch (error: unknown) {
      if (isEffError(error)) {
        await openToast({
          type: 'danger',
          title: `${error.message}`,
        });
      }
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

    createVerificationCodeforResetMutation,
    checkVerificationCodeforResetMutation,
    completeResetPassword,

    errors,
    isRequiredText,
    isMinLength,
    isEmailPattern,
    isPasswordPattern,
    isMaxLength,
    isVerificationpattern,
  };
};
