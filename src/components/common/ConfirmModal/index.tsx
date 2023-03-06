import { useRouter } from 'next/router';
import { Spacing } from '@toss/emotion-utils';

import Button from '~/components/common/Button';
import Text from '~/components/common/Text';

type ConfirmMidalProps = {
  title: string;
  subtitle: string;
};

export function ConfirmModal({ title, subtitle }: ConfirmMidalProps) {
  const router = useRouter();
  const onClick = () => {
    router.push('/login');
  };
  return (
    <>
      <Text variant="subtitle">{title}</Text>
      <Spacing size={8} />
      <Text variant="b1">{subtitle}</Text>
      <Spacing size={24} />
      <Button variant="largePrimary" onClick={onClick}>
        확인
      </Button>
    </>
  );
}
