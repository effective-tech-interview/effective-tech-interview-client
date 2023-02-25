import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { postEmail, postEmailAndCode, postSignUp } from '~/apis';

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
  } = useForm<CheckSignUpForm>({ mode: 'onChange' });
  const isDisabled = !isDirty || !isValid;
  const router = useRouter();

  const { mutate: createVerificationCode } = useMutation(async () => {
    const { email } = getValues();
    try {
      postEmail(email);
    } catch (error: unknown) {
      console.log(error);
    }
  });

  const { mutate: checkVerificationCode } = useMutation(async () => {
    const { email, verificationCode } = getValues();

    try {
      const res = postEmailAndCode(email, verificationCode);
      if (await res) {
        router.push(`/signup/password/${email}`);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  });

  const { mutate: completeSignUp } = useMutation(async (email: string) => {
    const { password, confirmPassword } = getValues();
    try {
      const res = postSignUp(email, password, confirmPassword);
      if (await res) {
        console.log('모달띄우기');
      }
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
    createVerificationCode,
    checkVerificationCode,
    completeSignUp,
  };
};
