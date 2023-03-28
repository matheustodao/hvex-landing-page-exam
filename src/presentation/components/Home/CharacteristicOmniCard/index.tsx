'use client';

import Image from 'next/image';
import { Container } from './styles';
import { Text } from '@components/shared/Typography/Text';

export type SrcIconName = 'data-integration' | 'manage-electronics' | 'renewable-energy' | 'smart-communication';

interface CharacteristicOmniCardProps {
  label: string,
  icon: {
    src: SrcIconName,
    width?: number,
    height?: number,
    alt?: string
  }
}

export function CharacteristicOmniCard({ label, icon }: CharacteristicOmniCardProps) {
  return (
    <Container>
      <Image
        src={`/assets/images/home/icons/${icon.src}.svg`}
        alt={icon?.alt ?? `icone ${label}`}
        width={icon?.width ?? 108}
        height={icon?.height ?? 108}
      />

      <Text as="strong" size="medium" weight={700}>
        {label}
      </Text>
    </Container>
  );
}
