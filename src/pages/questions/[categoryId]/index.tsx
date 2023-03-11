import { useState } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Spacing } from '@toss/emotion-utils';

import { AIBubble } from '~/components/common/AIBubble';
import { SingleBottomFixedButton } from '~/components/common/Button';
import { Header } from '~/components/common/Header';
import { InputBubble } from '~/components/common/InputBubble';
import { useMidCategoryQuery } from '~/hooks/query/useMidCategory';
import { useRandomQuestionQuery } from '~/hooks/query/useRandomQuestionQuery';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

const Questions = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: midCategoryData } = useMidCategoryQuery(Number(params.categoryId));
  const { data: randomQuestionData } = useRandomQuestionQuery(Number(params.categoryId));

  const [answer, setAnswer] = useState('');

  return (
    <>
      <Header headerTitle={midCategoryData?.name} color="gray" />
      <AIBubble questionType="normal" question={randomQuestionData?.question} />
      <Spacing size={20} />
      <InputBubble onChange={e => setAnswer(e.target.value)} value={answer} />
      <SingleBottomFixedButton variant="largePrimary" disabled={Boolean(!answer)}>
        작성완료
      </SingleBottomFixedButton>
    </>
  );
};

export default Questions;
