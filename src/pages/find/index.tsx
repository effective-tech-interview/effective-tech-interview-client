import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Header } from '~/components/common/Header';
import { Input } from '~/components/common/Input';
import Text from '~/components/common/Text';
import { useCheckSignUpForm } from '~/hooks/form/useCheckSignUpForm';

export default function Find() {
  const {
    register,
    isDisabled,
    errors,
    createVerificationCodeforResetMutation,
    checkVerificationCodeforResetMutation,
    isRequiredText,
    isEmailPattern,
    isMaxLength,
    isMinLength,
    isVerificationpattern,
  } = useCheckSignUpForm();

  const sendCode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createVerificationCodeforResetMutation();
  };
  return (
    <>
      <Header headerTitle="비밀번호 찾기" color="white" />
      <Spacing size={40} />
      <form
        onSubmit={e => {
          e.preventDefault();
          checkVerificationCodeforResetMutation();
        }}
      >
        <Input
          errorMessage={errors.email?.message}
          placeholder="가입한 이메일을 입력해주세요"
          label="가입한 이메일 입력"
          {...register('email', {
            required: isRequiredText('이메일'),
            pattern: isEmailPattern(),
          })}
          suffix={
            <Button
              onClick={(e: React.SyntheticEvent) => sendCode(e)}
              width={10}
              height={3.1}
              variant="smallButton"
            >
              인증코드 전송
            </Button>
          }
        />
        <Spacing size={8} />
        <Input
          placeholder="인증 번호 6자리"
          errorMessage={errors.verificationCode?.message}
          {...register('verificationCode', {
            required: isRequiredText('인증번호'),
            pattern: isVerificationpattern(),
            maxLength: isMaxLength(6),
            minLength: isMinLength(6),
          })}
        />
        <Spacing size={40} />
        <Button variant="largePrimary" disabled={isDisabled}>
          완료
        </Button>
      </form>
      <Spacing size={40} />
      <Text variant="b2">인증번호가 오지 않나요?</Text>
      <Spacing size={8} />
      <Flex direction="column">
        <Text variant="b2" color="gray400">
          스팸메일함을 확인해주세요. 스팸메일함에도 없다면 다시한번 ‘인증번호 전송’을 눌러주세요.
        </Text>
        <Spacing size={8} />
        <Text variant="b2" color="gray400">
          계정문의 | effectivetechinterview@gmail.com
        </Text>
      </Flex>
    </>
  );
}
