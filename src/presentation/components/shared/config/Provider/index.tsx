import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@/presentation/assets/styles/theme';

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      {children}
    </ThemeProvider>
  );
}
