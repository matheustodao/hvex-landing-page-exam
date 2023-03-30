'use client';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 14.59rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bullet-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    aspect-ratio: 1;
    max-width: 7.9rem;
    max-height: 7.9rem;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.brand[600]};
  }

  small {
    text-align: center;
    margin-top: 1.8rem;
  }
`;
