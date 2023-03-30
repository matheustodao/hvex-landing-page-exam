'use client';

import styled from 'styled-components';

export const Container = styled.footer`
  padding: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brand[500]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    align-items: normal;
  }

  @media (min-width: 1000px) {
    padding: 4.7rem 8.5rem;
  }

  @media (min-width: 1300px) {
    padding: 4.7rem 12.5rem;
  }
`;

export const MainInformation = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5.6rem;

  address {
    font-style: normal;
  }

  .--content-info {
    max-width: 23rem;
    strong {
      color: ${({ theme }) => theme.colors.brand[200]};
    }

    .info, .social {
      margin-top: 2.8rem;
    }

    .info {
      address + address {
        margin-top: 1.6rem;
      }
    }

    &:last-child {
      max-width: 100%;
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    flex:
  }

  @media (min-width: 920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;

    .--content-info {
      max-width: 23rem;
      display: flex;
      flex-direction: column;
      gap: 2.8rem;
    }
  }
`;

export const BottomInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  border-top: 1px solid #FFFFFF;

  padding-top: 1.9rem;
  margin-top: 6.3rem;

  .hidden-links {
    display: flex;
    gap: 1.2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (min-width: 900px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
