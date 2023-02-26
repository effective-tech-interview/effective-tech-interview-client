import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Header } from '~/components/common/Header';
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
  const {
    register,
    completeSignUpMutation,
    isPasswordPattern,
    isMinLength,
    getValues,
    isMaxLength,
    isRequiredText,
    errors,
    isDisabled,
  } = useCheckSignUpForm();
  return (
    <>
      <Header headerTitle="회원가입" color="white" />
      <form
        onSubmit={e => {
          e.preventDefault();
          completeSignUpMutation(email);
        }}
      >
        <Input
          label="비밀번호"
          placeholder="비밀번호 (영문, 숫자 조합 8자 이상)"
          errorMessage={errors.password?.message}
          {...register('password', {
            required: isRequiredText('비밀번호'),
            pattern: isPasswordPattern(),
            minLength: isMinLength(8),
            maxLength: isMaxLength(20),
          })}
        />
        <Spacing size={40} />
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
          errorMessage={errors.confirmPassword?.message}
          {...register('confirmPassword', {
            required: isRequiredText('비밀번호'),
            validate: {
              matchPassword: value => {
                const { password } = getValues();
                return password === value || '비밀번호가 일치하지 않습니다. ';
              },
            },
          })}
        />
        <Spacing size={40} />
        <Button variant="largePrimary" disabled={isDisabled}>
          가입 완료
        </Button>
      </form>
    </>
  );
}
