import { useEffect, useState } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Header } from '~/components/common/Header';
import { Questions } from '~/components/question';
import QuestionButtonApplication from '~/components/question/application/button/QuestionButtonApplication';
import QuestionInputApplication from '~/components/question/application/input/QuestionInputApplication';
import { useMidCategoryQuery } from '~/hooks/query/useMidCategory';
import { useQuestionsQuery } from '~/hooks/query/useQuestionsQuery';
import useGetPages from '~/hooks/useGetPages';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

const Question = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: midCategoryData } = useMidCategoryQuery(Number(params.categoryId));
  const { pagesId } = useGetPages(Number(params.categoryId));
  const { data: questionsData, isSuccess: questionsIsSuccess } = useQuestionsQuery(pagesId);

  const [actionData, setActionData] = useState({
    pageId: 0,
    pageQuestionId: 0,
  });

  useEffect(() => {
    if (questionsIsSuccess)
      setActionData({
        pageId: questionsData.pageNumber,
        pageQuestionId: questionsData.questions[questionsData.questions.length - 1].pageQuestionId,
      });
  }, [questionsIsSuccess, questionsData]);

  if (!midCategoryData || !questionsData) return <></>;

  return (
    <>
      <Header headerTitle={midCategoryData.name} color="gray" />
      <Questions questionsData={questionsData} />
      <QuestionButtonApplication actionData={actionData} />
      <QuestionInputApplication actionData={actionData} />
    </>
  );
};

export default Question;
