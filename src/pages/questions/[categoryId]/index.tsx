import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { css } from '@emotion/react';

import { Header } from '~/components/common/Header';
import { Question } from '~/components/question';
import { useMidCategoryQuery } from '~/hooks/query/useMidCategory';
import { usePagesQuery } from '~/hooks/query/usePagesQuery';
import { useQuestionsQuery } from '~/hooks/query/useQuestionsQuery';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

const Questions = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: midCategoryData } = useMidCategoryQuery(Number(params.categoryId));
  const { data: pagesData } = usePagesQuery();
  const { data: questionsData } = useQuestionsQuery(pagesData?.pageId, midCategoryData?.id);

  if (!pagesData || !midCategoryData) return;

  return (
    <>
      <Header headerTitle={midCategoryData.name} color="gray" />
      <div css={questionsWrapperStyle}>
        {questionsData?.questions.map((_, index) => {
          return (
            <Question
              key={index}
              type={index === 0 ? 'normal' : 'tail'}
              pageId={pagesData.pageId}
              midCategoryId={midCategoryData.id}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Questions;

const questionsWrapperStyle = css`
  height: 90vh;
  overflow: scroll;
  padding-bottom: 84px;
`;
