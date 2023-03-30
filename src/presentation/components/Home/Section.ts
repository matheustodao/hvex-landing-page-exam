'use client';

import styled, { css } from 'styled-components';

const VARIANT_HEIGHT_SECTION = {
  full: css`
    min-height: 100vh;
  `,

  'fit-content': css`
    min-height: fit-content;
  `,

  default: css`
    min-height: 80vh;
  `,

  auto: css`
    height: auto;
  `,
};

const VARIANT_SECTION = {
  default: css`
    ${({ theme }) => css`
      background: ${theme.colors.brand[600]};
      color: ${ theme.colors.white};
    `}
  `,

  'navy-blue': css`
    ${({ theme }) => css`
      background: ${theme.colors.brand[500]};
      color: ${ theme.colors.white};
    `}
  `,

  white: css`
    ${({ theme }) => css`
      background: ${theme.colors.white};
      color: ${ theme.colors.brand[600]};
    `}
  `,

  cream: css`
    ${({ theme }) => css`
      background: #F4F4F4;
      color: ${ theme.colors.brand[600]};
    `}
  `,
};

interface SectionProps {
  variant?: keyof typeof VARIANT_SECTION,
  hasBorderTop?: boolean,
  height?: keyof typeof VARIANT_HEIGHT_SECTION
}

export const Section = styled.section<SectionProps>`
  position: sticky;
  top: 0;
  padding: 3.2rem auto;
  width: 100%;
  ${({ height }) => VARIANT_HEIGHT_SECTION[height ?? 'default']};

  article {
    padding-top: 32px;
  }

  border-top: ${({ hasBorderTop }) => (hasBorderTop ? '1px solid #000' : 'none')};

  ${({ variant }) => VARIANT_SECTION[variant ?? 'default']}
`;
