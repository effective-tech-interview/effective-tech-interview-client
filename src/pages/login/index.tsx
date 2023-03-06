import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Header } from '~/components/common/Header';
import { Icon } from '~/components/common/Icon';
import { Input } from '~/components/common/Input';
import Text from '~/components/common/Text';
import { useCheckLoginForm } from '~/hooks/form/useCheckLoginForm';

export default function Login() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const { isDisabled, register, isEmailPattern, isPasswordPattern, loginMutation, isRequiredText } =
    useCheckLoginForm();
  const onClick = () => {
    router.push('/signup');
  };

  const handleVisible = () => {
    setIsVisible(prev => !prev);
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
          isVisible={isVisible}
          label="비밀번호"
          placeholder="비밀번호(영문, 숫자 조합 8자 이상)"
          {...register('password', {
            pattern: isPasswordPattern(),
            required: isRequiredText('비밀번호'),
          })}
          suffix={
            isVisible ? (
              <Icon onClick={handleVisible} iconName="show" />
            ) : (
              <Icon onClick={handleVisible} iconName="hide" />
            )
          }
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
        <Text variant="subtitle" onClick={() => router.push('/find')}>
          비밀번호 찾기
        </Text>
      </Flex.Center>
      <Spacing size={124} />
    </>
  );
}
