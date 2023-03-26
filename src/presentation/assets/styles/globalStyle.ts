'use client';

import { createGlobalStyle } from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  fallback: ['sans-serif']
});

export const GlobalStyle = createGlobalStyle`
  ${inter.className};

  * {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: 62.5%;
  }

  :root {
    --inter-font: ${inter.style.fontFamily};
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.primary.family};
    font-weight: ${({ theme }) => theme.fonts.primary.weight[400]};
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.bg.default};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  html {
    height: 100vh;
  }
`;
