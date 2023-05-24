import { useState } from 'react';
import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import Checkbox from '~/components/common/Checkbox';
import { Header } from '~/components/common/Header';
import { Icon } from '~/components/common/Icon';
import { Input } from '~/components/common/Input';
import Text from '~/components/common/Text';
import { useCheckSignUpForm } from '~/hooks/form/useCheckSignUpForm';
import { theme } from '~/styles/Theme';

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
  const [isVisible, setIsVisible] = useState(false);
  const [isCheckVisible, setIsCheckVisible] = useState(false);

  const [isTermsOfServiceChecked, setIsTermsOfServiceChecked] = useState(false);
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);

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

  const handleVisible = () => {
    setIsVisible(prev => !prev);
  };

  const handleCheckVisible = () => {
    setIsCheckVisible(prev => !prev);
  };
  return (
    <>
      <Header headerTitle="회원가입" color="white" />
      <Spacing size={40} />
      <form
        onSubmit={e => {
          e.preventDefault();
          completeSignUpMutation(email);
        }}
      >
        <Input
          isVisible={isVisible}
          label="비밀번호"
          placeholder="비밀번호 (영문, 숫자 조합 8자 이상)"
          errorMessage={errors.password?.message}
          {...register('password', {
            required: isRequiredText('비밀번호'),
            pattern: isPasswordPattern(),
            minLength: isMinLength(8),
            maxLength: isMaxLength(20),
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
        <Input
          isVisible={isCheckVisible}
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
          suffix={
            isCheckVisible ? (
              <Icon onClick={handleCheckVisible} iconName="show" />
            ) : (
              <Icon onClick={handleCheckVisible} iconName="hide" />
            )
          }
        />
        <Spacing size={40} />
        <Checkbox
          id="TermsOfService"
          checked={isTermsOfServiceChecked}
          onClick={() => setIsTermsOfServiceChecked(prev => !prev)}
        >
          <Text variant="b2" color="gray600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twilight-tartan-155.notion.site/8d39631d4ec74cc283322d0b96b77e98"
              style={{ textDecoration: 'none', borderBottom: `1px solid ${theme.color.gray600}` }}
            >
              서비스 이용약관
            </a>
            에 동의합니다 (필수)
          </Text>
        </Checkbox>
        <Spacing size={8} />
        <Checkbox
          id="PrivacyPolicy"
          checked={isPrivacyPolicyChecked}
          onClick={() => setIsPrivacyPolicyChecked(prev => !prev)}
        >
          <Text variant="b2" color="gray600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twilight-tartan-155.notion.site/8d39631d4ec74cc283322d0b96b77e98"
              style={{ textDecoration: 'none', borderBottom: `1px solid ${theme.color.gray600}` }}
            >
              개인정보 보호 정책
            </a>
            에 동의합니다 (필수)
          </Text>
        </Checkbox>
        <Spacing size={16} />
        <Button
          variant="largePrimary"
          disabled={isDisabled || !isTermsOfServiceChecked || !isPrivacyPolicyChecked}
        >
          가입 완료
        </Button>
      </form>
      <Spacing size={144} />
    </>
  );
}
