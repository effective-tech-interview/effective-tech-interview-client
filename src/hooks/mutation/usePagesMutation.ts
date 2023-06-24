import { useMutation } from '@tanstack/react-query';

import { postPages } from '~/apis';

interface UsePagesMutationProps {
  midCategoryId: number;
}

export const usePagesMutation = () => {
  const pagesMutation = useMutation(({ midCategoryId }: UsePagesMutationProps) =>
    postPages(midCategoryId)
  );

  return pagesMutation;
};
