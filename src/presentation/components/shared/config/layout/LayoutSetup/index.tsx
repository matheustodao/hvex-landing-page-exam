'use client';

import { ReactNode } from 'react';

import { GlobalStyle } from '@/presentation/assets/styles/globalStyle';
import StyledComponentsRegistry from '@/presentation/lib/styled-components/registry';

import { Provider } from '../../Provider';

interface LayoutSetupProps {
  children: ReactNode
}

export function LayoutSetup({ children }: LayoutSetupProps) {
  return (
    <StyledComponentsRegistry>
      <Provider>
        <GlobalStyle />
        {children}
      </Provider>
    </StyledComponentsRegistry>
  );
}
