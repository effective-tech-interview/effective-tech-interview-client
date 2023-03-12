import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

interface CategoryDetailBodyProps {
  categories?: MidCategoryResponse[];
}

const CategoryDetailBody = ({ categories }: CategoryDetailBodyProps) => {
  return (
    <div css={CategoryDetailBodyWrapperStyle}>
      {categories?.map(category => {
        return (
          <div key={category.id} css={CategoryDetailBodyImgWrapperStyle}>
            <Link href={`/questions/${category.name.toLowerCase()}`}>
              <Image alt={category.name} src={category.imageUrl} fill />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export { CategoryDetailBody };

const CategoryDetailBodyWrapperStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

const CategoryDetailBodyImgWrapperStyle = css`
  position: relative;
  width: 100%;
  height: 160px;
`;
