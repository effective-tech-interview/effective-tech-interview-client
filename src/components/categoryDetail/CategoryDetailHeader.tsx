import { useRouter } from 'next/router';
import { Flex, Spacing } from '@toss/emotion-utils';

import Button from '../common/Button';
import Text from '../common/Text';

interface CategoryDetailHeaderProps {
  name?: string;
}

const CategoryDetailHeader = ({ name }: CategoryDetailHeaderProps) => {
  const router = useRouter();

  return (
    <Flex direction="column" justify="space-between">
      <Text variant="b1">나의 희망 직무</Text>
      <Spacing size={8} />
      <Flex align="center" justify="space-between">
        <Text variant="h2">{name}</Text>
        <Button
          variant="mediumTeritary"
          width={6}
          height={4}
          onClick={() => router.push('/category')}
        >
          변경
        </Button>
      </Flex>
    </Flex>
  );
};

export { CategoryDetailHeader };
