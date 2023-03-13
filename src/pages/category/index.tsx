import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRecoilValue } from 'recoil';

import { getMainCategories } from '~/apis';
import { SingleBottomFixedButton } from '~/components/common/Button';
import Select from '~/components/common/Select';
import Text from '~/components/common/Text';
import { MAIN_CATEGORIES_QUERY_KEYS } from '~/constants/queryKeys';
import { useMainCategoriesQuery } from '~/hooks/query/useMainCategoriesQuery';
import selectedCategoryIdAtomFamily from '~/store/selectedCategoryId/selectedCategoryIdAtom';

export const getStaticProps: GetStaticProps<{ dehydratedState: DehydratedState }> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: MAIN_CATEGORIES_QUERY_KEYS.getMainCategories,
    queryFn: getMainCategories,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Category() {
  const { data: mainCategoryData } = useMainCategoriesQuery();

  const selectedCategoryId = useRecoilValue(selectedCategoryIdAtomFamily('main'));

  const router = useRouter();

  return (
    <>
      <Spacing size={80} />
      <Flex.Center direction="column">
        <Text variant="h2">희망하는 직무를 선택해주세요</Text>
        <Spacing size={40} />
        <Select items={mainCategoryData?.categories} />
        <SingleBottomFixedButton
          variant="largePrimary"
          disabled={selectedCategoryId === 0}
          onClick={() => router.push(`/category/${selectedCategoryId}`)}
        >
          완료
        </SingleBottomFixedButton>
      </Flex.Center>
    </>
  );
}
