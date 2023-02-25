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
  const { register, completeSignUp } = useCheckSignUpForm();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        completeSignUp(email);
      }}
    >
      <Input label="비밀번호" {...register('password')} />
      <Spacing size={40} />
      <Input label="비밀번호 확인" {...register('confirmPassword')} />
      <Spacing size={40} />
      <Button>가입 완료</Button>
    </form>
  );
}
