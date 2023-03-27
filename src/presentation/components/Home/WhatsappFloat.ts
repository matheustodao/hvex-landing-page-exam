'use client';

import styled from 'styled-components';

export const WhatsappFloat = styled.a`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.brand[300]};

  position: fixed;
  bottom: 4rem;
  right: 12.5rem;

  z-index: 30;

  @media (max-width: 970px) {
    bottom: 2rem;
    right: 2.4rem;
  }
`;
