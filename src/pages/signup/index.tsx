import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { useCheckSignUpForm } from '~/hooks/form/useCheckSignUpForm';

export default function SignUp() {
  const {
    register,
    isDisabled,
    errors,
    createVerificationCode,
    checkVerificationCode,
    isRequiredText,
    isEmailPattern,
  } = useCheckSignUpForm();

  const sendCode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createVerificationCode();
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        checkVerificationCode();
      }}
    >
      <Input
        {...register('email', {
          required: isRequiredText('이메일'),
          pattern: isEmailPattern(),
        })}
        label="이메일"
        placeholder="이메일을 입력해주세요"
        errorMessage={errors.email?.message}
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
      <Spacing size={20} />
      <Input
        placeholder="인증 번호 6자리"
        errorMessage={errors.verificationCode?.message}
        {...register('verificationCode', {
          required: isRequiredText('인증번호'),
        })}
      />
      <Spacing size={40} />
      <Button disabled={isDisabled}>다음</Button>
    </form>
  );
}