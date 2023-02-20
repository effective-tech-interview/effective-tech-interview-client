import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

import useCategorySelect from '~/hooks/useCategorySelect';
import { theme } from '~/styles/Theme';

import { Icon } from '../Icon';

interface SelectItemProps {
  id: number;
}

const SelectItem = ({ id, children }: PropsWithChildren<SelectItemProps>) => {
  const { selected, handleCategorySelect } = useCategorySelect({ type: 'main', categoryId: id });

  return (
    <StyledSelectItem selected={selected} onClick={handleCategorySelect}>
      <p css={SelectItemStyle}>{children}</p>
      {selected && <Icon size="eachSize" width={18} height={14} iconName="check" />}
    </StyledSelectItem>
  );
};

interface SelectProps {
  items: MainCategoryResponse[];
}

const Select = ({ items }: SelectProps) => {
  return (
    <ul>
      {items.map(item => (
        <SelectItem key={item.id} id={item.id}>
          {item.name}
        </SelectItem>
      ))}
    </ul>
  );
};

export default Select;

type SelectStyleProps = { selected: boolean };

const StyledSelectItem = styled('li')<SelectStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.6rem;
  border-radius: 0.8rem;
  padding: 1.6rem;
  background-color: ${theme.color.gray000};
  color: ${theme.color.gray800};

  :not(:first-child) {
    margin-top: 1rem;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid ${theme.color.primary_default};
    `}
`;

const SelectItemStyle = css`
  ${theme.typography.b1}
`;
