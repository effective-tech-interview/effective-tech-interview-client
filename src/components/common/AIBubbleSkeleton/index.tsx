import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '~/styles/Theme';

import { BubbleContainer, BubbleWrapper, Divider } from '../AIBubble';

interface AIBubbleSkeletonProps {
  isSubmitted?: boolean;
}

export const AIBubbleSkeleton = ({ isSubmitted }: AIBubbleSkeletonProps) => {
  return (
    <BubbleWrapper>
      <BubbleContainer>
        <SkeletonChip />
        <SkeletonText />
        {isSubmitted && (
          <>
            <Divider />
            <SkeletonChip />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </>
        )}
      </BubbleContainer>
    </BubbleWrapper>
  );
};

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  20% {
    opacity: 0.2;
  }

  40%{
    opacity: 0.4;
  }
  
  60%{
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
`;

const SkeletonChip = styled.div`
  border-radius: 80px;
  width: 60px;
  height: 22px;
  background: ${theme.color.gray100};
  animation: ${pulseKeyframe} 4s linear infinite;
`;

const SkeletonText = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 20px;
  background: ${theme.color.gray100};
  animation: ${pulseKeyframe} 4s linear infinite;
`;
