import { useState } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Spacing } from '@toss/emotion-utils';

import { AIBubble } from '~/components/common/AIBubble';
import { DoubleBottomFixedButton, SingleBottomFixedButton } from '~/components/common/Button';
import { Header } from '~/components/common/Header';
import { InputBubble } from '~/components/common/InputBubble';
import { UserBubble } from '~/components/common/UserBubble';
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!midCategoryData || !randomQuestionData) return;

  return (
    <>
      <Header headerTitle={midCategoryData.name} color="gray" />
      <AIBubble questionType="normal" question={randomQuestionData.questions[0].question} />
      <Spacing size={20} />
      {isSubmitted ? (
        <UserBubble userAnswer={answer} />
      ) : (
        <InputBubble onChange={e => setAnswer(e.target.value)} value={answer} />
      )}
      {isSubmitted ? (
        <DoubleBottomFixedButton variant="largePrimary">꼬리 질문</DoubleBottomFixedButton>
      ) : (
        <SingleBottomFixedButton
          variant="largePrimary"
          disabled={Boolean(!answer)}
          onClick={() => setIsSubmitted(true)}
        >
          작성완료
        </SingleBottomFixedButton>
      )}
    </>
  );
};

export default Questions;
