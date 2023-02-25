import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { useCheckSignUpForm } from '~/hooks/form/useCheckSignUpForm';

export default function SignUp() {
  const {
    register,
    getValues,
    setError,
    isDisabled,
    createVerificationCode,
    checkVerificationCode,
  } = useCheckSignUpForm();
  const { email } = getValues();
  console.log(email);
  const sendCode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createVerificationCode();
    console.log(email);
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        checkVerificationCode();
      }}
    >
      <Input
        {...register('email')}
        label="이메일"
        placeholder="이메일을 입력해주세요"
        suffix={
          <Button
            onClick={(e: React.SyntheticEvent) => sendCode(e)}
            width={20}
            height={3}
            backgroundColor={'gray000'}
            color={'gray800'}
          >
            인증코드 전송
          </Button>
        }
      />
      <Spacing size={12} />
      <Input placeholder="인증 번호 6자리" {...register('verificationCode')} />
      <Spacing size={40} />
      <Button disabled={isDisabled}>다음</Button>
    </form>
  );
}
