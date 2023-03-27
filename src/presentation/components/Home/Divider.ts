'use client';
import styled from 'styled-components';

export const Divider = styled.div`
  height: 0.5rem;
  width: 17rem;
  background: ${({ theme }) => theme.colors.brand[300]};
  margin: 3rem auto;
`;
