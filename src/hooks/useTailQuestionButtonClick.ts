import { useTailQuestionMutation } from './mutation/useTailQuestionMutation';
import { useQuestionsQuery } from './query/useQuestionsQuery';
import { useDidUpdate } from './useDidUpdate';

interface Props {
  pageId: number;
  pageQuestionId: number;
}

const useTailQuestionButtonClick = ({ pageId, pageQuestionId }: Props) => {
  const { mutate: tailQuestionMutate, isSuccess: tailQuestionIsSuccess } =
    useTailQuestionMutation();

  const { refetch: questionsRefetch } = useQuestionsQuery(pageId);

  useDidUpdate(() => {
    if (tailQuestionIsSuccess) questionsRefetch();
  }, [tailQuestionIsSuccess]);

  const handleClick = () => {
    tailQuestionMutate({
      pageId,
      pageQuestionId,
    });
  };

  return { handleClick };
};

export default useTailQuestionButtonClick;
