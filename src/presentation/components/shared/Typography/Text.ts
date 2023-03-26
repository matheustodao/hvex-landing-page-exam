'use client';

import styled, { DefaultTheme } from 'styled-components';

interface TextProps {
  size?: keyof DefaultTheme['fonts']['size'];
  weight?: keyof DefaultTheme['fonts']['primary']['weight'];
}

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: ${({ theme, size }) => theme.fonts.size[size ?? 'small']};
  font-weight: ${({ theme, weight }) => theme.fonts.primary.weight[weight ?? 400]};
`;
