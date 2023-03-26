'use client';
import { ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

interface StyledComponentRegistryProps {
  children: ReactNode,
}

export default function StyledComponentsRegistry({ children }: StyledComponentRegistryProps) {
  const [styledComponentsStylesheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStylesheet.getStyleElement();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStylesheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
