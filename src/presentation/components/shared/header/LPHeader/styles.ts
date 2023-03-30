import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 2.4rem 13.5rem;
  background: #252835;

  @media (max-width: 1075px) {
    padding-right: 10rem;
    padding-left: 10rem;
  }

  @media (max-width: 970px) {
    padding-right: 2.4rem;
    padding-left: 2.4rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 805px) {
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const Content = styled.div`
  &, ul {
    display: flex;
    align-items: center;
  }

  gap: 2.4rem;

  > button {
    height: fit-content;
  }

  @media (max-width: 500px) {
    ul {
      flex-direction: column;
    }
  }

  @media (max-width: 680px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.6rem;

    > button {
      font-size: 1.4rem;
    }
  }
`;

interface RouteProps {
  isActive: boolean
}

export const Route = styled.li<RouteProps>`
  list-style: none;

  &, a {
    color: ${({ theme, isActive }) => (isActive
    ? theme.colors.brand[300]
    : theme.colors.white)};
  }

  a {
    text-decoration: none;
  }

  & + & {
    margin-left: 4.8rem;
  }

  @media (max-width: 407px) {
    a, small {
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    a, small {
      font-size: 1.4rem;
      text-align: left;
    }

    & + & {
      margin-top: 1.6rem;
      margin-left: 0;
    }
  }
`;
