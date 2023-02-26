import { useRouter } from 'next/router';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Header } from '~/components/common/Header';
import { Input } from '~/components/common/Input';
import Text from '~/components/common/Text';
import { useCheckLoginForm } from '~/hooks/form/useCheckLoginForm';

export default function Login() {
  const router = useRouter();

  const { isDisabled, register, isEmailPattern, isPasswordPattern, loginMutation, isRequiredText } =
    useCheckLoginForm();
  const onClick = () => {
    router.push('/signup');
  };
  return (
    <>
      <Header headerTitle="로그인" color="white" />
      <Spacing size={40} />
      <form
        onSubmit={e => {
          e.preventDefault();
          loginMutation();
        }}
      >
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요"
          {...register('email', {
            pattern: isEmailPattern(),
            required: isRequiredText('이메일'),
          })}
        />
        <Spacing size={32} />
        <Input
          label="비밀번호"
          placeholder="비밀번호(영문, 숫자 조합 8자 이상)"
          {...register('password', {
            pattern: isPasswordPattern(),
            required: isRequiredText('비밀번호'),
          })}
        />
        <Spacing size={40} />
        <Button variant="largePrimary" disabled={isDisabled}>
          로그인
        </Button>
      </form>
      <Spacing size={24} />
      <Flex.Center css={{ gap: '16px' }}>
        <Text
          css={{ cursor: 'pointer' }}
          onClick={onClick}
          variant="subtitle"
          color="primary_default"
        >
          회원가입
        </Text>
        <Text variant="subtitle">비밀번호 찾기</Text>
      </Flex.Center>
      <Spacing size={124} />
      <Flex.Center direction="column">
        <Text variant="b2" color="gray400">
          회원가입 시, 이펙티브 기술면접 서비스 이용
        </Text>
        <Text variant="b2" color="gray400">
          약관과 개인정보 보호정책에 동의하게 됩니다.
        </Text>
      </Flex.Center>
    </>
  );
}
