import Image from 'next/image';
import { Flex, Spacing } from '@toss/emotion-utils';

import { Header } from '~/components/common/Header';
import Text from '~/components/common/Text';
import { LogoutModal } from '~/components/mypage/LogoutModal';
import { useUserrInfoQuery } from '~/hooks/query/useUserInfoQuery';
import { useModal } from '~/hooks/useModal';

export default function MyPage() {
  const { data: userInfo } = useUserrInfoQuery();
  const { openModal, close } = useModal();
  const onClick = async () => {
    await openModal({
      children: <LogoutModal close={close} />,
    });
  };
  return (
    <>
      <Header headerTitle="마이페이지" color="white" />
      <Flex.Center direction="column">
        <Image
          alt="userImage"
          src="https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/userImage.svg"
          width={80}
          height={80}
        />
        <Spacing size={8} />
        <Text variant="subtitle">{userInfo?.nickname}</Text>
        <Spacing size={8} />
        <Text variant="b2" color="gray600">
          {userInfo?.email}
        </Text>
      </Flex.Center>
      <Spacing size={40} />
      <Text css={{ cursor: 'pointer' }} variant="subtitle" onClick={onClick}>
        로그아웃
      </Text>
    </>
  );
}
