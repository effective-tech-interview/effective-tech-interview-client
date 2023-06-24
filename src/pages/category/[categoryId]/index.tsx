import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useSetRecoilState } from 'recoil';

import { getMidCategories } from '~/apis';
import { CategoryDetailBody, CategoryDetailHeader } from '~/components/categoryDetail';
import { HomeHeader } from '~/components/common/HomeHeader';
import Text from '~/components/common/Text';
import { MID_CATEGORIES_QUERY_KEYS } from '~/constants/queryKeys';
import { useMidCategoriesQuery } from '~/hooks/query/useMidCategoriesQuery';
import useDidMount from '~/hooks/useDidMount';
import userAnswerResetSelector from '~/store/userAnswerReset/userAnswerResetSelector';

const TOTAL_PAGE_NUMBER = 4;

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: getMainCategories API를 통한 개선점 존재
  const paths = Array(TOTAL_PAGE_NUMBER)
    .fill(0)
    .map((_, index) => {
      return { params: { categoryId: `${index + 1}` } };
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  mainCategoryId: number;
  dehydratedState: DehydratedState;
}> = async ({ params }) => {
  let mainCategoryId = 0;

  const queryClient = new QueryClient();

  if (params && params.categoryId) {
    mainCategoryId = Number(params.categoryId);

    await queryClient.prefetchQuery({
      queryKey: MID_CATEGORIES_QUERY_KEYS.getMidCategories(mainCategoryId),
      queryFn: () => getMidCategories(mainCategoryId),
    });
  }

  return {
    props: { mainCategoryId, dehydratedState: dehydrate(queryClient) },
  };
};

export default function CategoryDetail({
  mainCategoryId,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: midCategoriesData } = useMidCategoriesQuery(mainCategoryId);

  const resetUserAnswer = useSetRecoilState(userAnswerResetSelector);

  useDidMount(() => {
    resetUserAnswer(1);
  });

  if (!midCategoriesData) return;

  return (
    <>
      <HomeHeader color="white" />
      <Spacing size={26} />
      <CategoryDetailHeader name={midCategoriesData.name} />
      <Spacing size={20} />
      <CategoryDetailBody categories={midCategoriesData.categories} />
      <Spacing size={63} />
      <Flex.Center>
        <Text variant="caption" color="gray400">
          effectivetechinterview@gmail.com
        </Text>
      </Flex.Center>
    </>
  );
}
