'use client';

import { createGlobalStyle, css } from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400', '500', '700']
});

export const GlobalStyle = createGlobalStyle`
  ${inter.className};

  * {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    --inter-font: ${inter.style.fontFamily};
    font-size: 62.5%;
  }

  html, body {
    ${({ theme }) => css`
      font-family: ${theme.fonts.primary.family};
      font-weight: ${theme.fonts.primary.weight[400]};
      font-size: ${theme.fonts.size.normal};
      background: ${theme.colors.bg.default};
      color: ${theme.colors.primary.dark};
    `}
  }

  html {
    height: 100vh;
  }
`;
