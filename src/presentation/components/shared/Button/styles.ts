/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';

const VARIANT_BUTTON = {
  outline: css`
    border: 1px solid var(--color-default);
    color: var(--color-default);
    background: transparent;
  `,

  solid: css`
    background: var(--color-default);
    color: var(--color-font);
  `,
};

const COLOR_SCHEMA_BUTTON = {
  'light-blue': css`
    --color-font: ${({ theme }) => theme.colors.white};
    --color-default: ${({ theme }) => theme.colors.brand[300]};
  `,

  'deep-blue': css`
    --color-font: ${({ theme }) => theme.colors.white};
    --color-default: ${({ theme }) => theme.colors.brand[600]};
  `,
};

export interface ButtonStyledProps {
  variant?: keyof typeof VARIANT_BUTTON,
  colorSchema?: keyof typeof COLOR_SCHEMA_BUTTON,
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ colorSchema }) => COLOR_SCHEMA_BUTTON[colorSchema ?? 'light-blue']};
  ${({ variant }) => VARIANT_BUTTON[variant ?? 'solid']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  padding: 1rem 2.2rem;
  line-height: 3rem;

  cursor: pointer;
  transition: all ease-in-out 350ms;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary.family};
    font-weight: ${theme.fonts.primary.weight[500]};
    font-size: ${theme.fonts.size.small};
    border-radius: ${theme.borderRadius.normal};
  `};


  &:active {
    filter: brightness(1.08);
  }
`;
