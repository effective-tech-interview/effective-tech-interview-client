import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { useCheckSignUpForm } from '~/hooks/form/useCheckSignUpForm';

type IParams = {
  email: string;
};
export async function getServerSideProps({ params }: { params: IParams }) {
  const email = params.email;

  return {
    props: {
      email,
    },
  };
}

export default function Password({ email }: { email: string }) {
  const { register, completeSignUp, isPasswordPattern, isMinLength, getValues, errors } =
    useCheckSignUpForm();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        completeSignUp(email);
      }}
    >
      <Input
        label="비밀번호"
        placeholder="비밀번호 (영문, 숫자 조합 8자 이상)"
        errorMessage={errors.password?.message}
        {...register('password', { pattern: isPasswordPattern(), minLength: isMinLength(8) })}
      />
      <Spacing size={40} />
      <Input
        label="비밀번호 확인"
        placeholder="비밀번호를 입력해주세요."
        errorMessage={errors.confirmPassword?.message}
        {...register('confirmPassword', {
          validate: {
            matchPassword: value => {
              const { password } = getValues();
              return password === value || '비밀번호가 일치하지 않습니다. ';
            },
          },
        })}
      />
      <Spacing size={40} />
      <Button>가입 완료</Button>
    </form>
  );
}
