import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { KeyOfColors } from '~/styles/Theme';
import { theme } from '~/styles/Theme';

import Text from '../Text';

type ChipType = 'default' | 'highlight' | 'home';
export interface ChipProps {
  text: string;
  chipType: ChipType;
}

type ChipColors = {
  [key in ChipType]: {
    background: string;
    color: KeyOfColors;
  };
};
const CHIP_COLOR: ChipColors = {
  default: {
    background: theme.color.gray050,
    color: 'gray400',
  },
  highlight: {
    background: theme.color.primary_default,
    color: 'gray000',
  },
  home: {
    background: theme.color.gray000,
    color: 'gray400',
  },
};
export const Chip = ({ text, chipType }: ChipProps) => {
  return (
    <StyledChip chipType={chipType}>
      <Text variant="caption" color={CHIP_COLOR[chipType]['color']}>
        {text}
      </Text>
    </StyledChip>
  );
};

const StyledChip = styled('div')<{ chipType: ChipType }>`
  border-radius: 80px;
  padding: 4px 8px;
  width: fit-content;
  ${({ chipType }) => {
    return css`
      background: ${CHIP_COLOR[chipType]['background']};
    `;
  }}
`;
