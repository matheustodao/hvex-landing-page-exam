'use client';

import React, { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';
import { ButtonStyled, ButtonStyledProps } from './styles';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyledProps {
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, _refElement) => (
  <ButtonStyled
    type="button"
    ref={_refElement}
    {...props}
  >
    {children}
  </ButtonStyled>
));

export default Button;
