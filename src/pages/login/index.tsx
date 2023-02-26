import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import Text from '~/components/common/Text';

export default function Login() {
  return (
    // 헤더 자리
    <>
      <form>
        <Input label="이메일" placeholder="이메일을 입력해주세요" />
        <Spacing size={32} />
        <Input label="비밀번호" placeholder="비밀번호(영문, 숫자 조합 8자 이상)" />
        <Spacing size={40} />
        <Button>로그인</Button>
      </form>
      <Spacing size={24} />
      <Flex.Center css={{ gap: '16px' }}>
        <Text variant="subtitle" color="primary_default">
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
