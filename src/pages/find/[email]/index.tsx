import { useState } from 'react';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Header } from '~/components/common/Header';
import { Icon } from '~/components/common/Icon';
import { Input } from '~/components/common/Input';
import Text from '~/components/common/Text';

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

export default function ResetPassword({ email }: { email: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCheckVisible, setIsCheckVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible(prev => !prev);
  };

  const handleCheckVisible = () => {
    setIsCheckVisible(prev => !prev);
  };
  return (
    <>
      <Header headerTitle="비밀번호 찾기" color="white" />
      <Spacing size={40} />
      <form>
        <Input
          label="비밀번호 재설정"
          placeholder="비밀번호 (영문, 숫자 조합 8자 이상)"
          suffix={
            isVisible ? (
              <Icon onClick={handleVisible} iconName="show" />
            ) : (
              <Icon onClick={handleVisible} iconName="hide" />
            )
          }
        />
        <Spacing size={40} />
        <Input
          label="비밀번호 재설정 확인"
          placeholder="비밀번호를 입력해주세요."
          suffix={
            isCheckVisible ? (
              <Icon onClick={handleCheckVisible} iconName="show" />
            ) : (
              <Icon onClick={handleCheckVisible} iconName="hide" />
            )
          }
        />
        <Spacing size={40} />
        <Button variant="largePrimary" disabled={false}>
          변경 완료
        </Button>
      </form>
      <Spacing size={144} />

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
