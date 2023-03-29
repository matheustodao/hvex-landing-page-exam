'use client';

import { Text } from '@components/shared/Typography/Text';
import Image from 'next/image';
import { Container } from './styles';

export type IconBadgeFilename = 'battery' | 'bpm' | 'dashboard' | 'growth' | 'harmonics' | 'no-charges' | 'up-and-down-arrow' | 'thermometer';

interface BudgeProps {
  title: string,
  srcIcon: IconBadgeFilename
}

export function Budge({ title, srcIcon }: BudgeProps) {
  return (
    <Container>
      <div className="bullet-icon">
        <Image
          src={`/assets/images/home/icons/${srcIcon}.svg`}
          alt="icon"
          width={45}
          height={45}
        />
      </div>

      <Text as="small">
        {title}
      </Text>
    </Container>
  );
}
