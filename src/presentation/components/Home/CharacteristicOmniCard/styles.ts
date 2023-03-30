'use client';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.brand[300]};
  background: ${({ theme }) => theme.colors.brand[500]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 3.6rem 2.1rem;
  padding-bottom: 2.6rem;

  max-width: 24.265rem;
  max-height: 24.8rem;
  height: 100%;

  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.brand[200]};
  }

  img + strong {
    margin-top: 1.4rem;
  }
`;
