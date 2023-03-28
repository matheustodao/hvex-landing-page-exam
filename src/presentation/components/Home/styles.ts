'use client';

import styled from 'styled-components';
import { Divider } from './Divider';

interface OminiTrafoImageWrapperProps {
  invert?: boolean;
}

export const OminiTrafoImageWrapper = styled.div<OminiTrafoImageWrapperProps>`
  position: relative;
  width: 50.5rem;
  height: 73.5rem;
  object-fit: contain;

  transform: ${({ invert }) => (!invert ? 'none' : 'scaleX(-1)')};

  @media (max-width: 840px) {
    width: 25.25rem;
    height: 36.75rem;
  }

  @media (max-width: 740px) {
    width: 20.25rem;
    height: 26.75rem;
  }
`;

export const HeroSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding-bottom: 4.2rem;

  ${OminiTrafoImageWrapper} {
    position: relative;
    margin-top: 8rem;
  }

  .left-content {
    margin: 3.2rem 2.4rem;
    .title {
      margin-bottom: 2.4rem;
    }

    .description {
      margin-bottom: 3.2rem;
      font-size: ${({ theme }) => theme.fonts.size.small};
    }
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-areas: "left-content right-content";
    width: 100%;
    height: 77rem;
    position: relative;
    padding-bottom: 5.6rem;

    .left-content {
      grid-area: 'left-content';
      margin: auto 13.5rem;
      z-index: 2;

      .title {
        max-width: 80rem;
        font-size: ${({ theme }) => theme.fonts.size.xLarge};
      }

      .description {
        line-height: 2.4rem;
        margin-top: 2.4rem;
        margin-bottom: 3.2rem;
        max-width: 76rem;
        letter-spacing: -0.02rem;
        font-size: ${({ theme }) => theme.fonts.size.normal};
      }
    }

    ${OminiTrafoImageWrapper} {
      margin-top: 0;
      margin-left: -34rem;
      grid-area: right-content;
    }
  }
`;

export const WelcomeSection = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2.4rem;
  align-items: center;
  justify-content: center;

  .info-container {
    .title {
      margin-bottom: 3.4rem;
      color: #115678;
    }

    .description {
      line-height: 3.1rem;
    }
  }

  .wrapper-image {
    position: relative;
    margin-top: 4.6rem;
    width: 100%;
    height: 40rem;

    @media (min-width: 403px) {
      width: 35.65rem;
      height: 45.41rem;
    }

    @media (min-width: 790px) {
      width: 25.65rem;
      height: 35.41rem;
    }

    @media (min-width: 1290px) {
      width: 55.3rem;
    }
  }

  @media (min-width: 790px) {
    flex-direction: row-reverse;
    align-items: flex-start;

    .info-container {
      grid-area: information;
      grid-column-start: 2;
      margin-left: 5.6rem;
      flex: 2;

      .title {
        font-size: ${({ theme }) => theme.fonts.size.large};
      }


      .description {
        font-size: ${({ theme }) => theme.fonts.size.normal};
      }
    }

    .wrapper-image {
      grid-area: wrapperImage;
      margin-top: 0;
      flex: 1 10.65rem 10.65rem;
      height: 45.41rem;
    }
  }

  @media (min-width: 1290px) {
    margin: 12.5rem;

    .wrapper-image {
      grid-area: wrapperImage;
      margin-top: 0;
      height: 70.821rem;
    }

    .info-container {
      .title {
        max-width: 38.4rem;
      }
    }
  }
`;

export const CTASection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 2.4rem;
  padding-top: 2.8rem;
  padding-bottom: 6rem;

  h3 {
    max-width: 56.9rem;
    text-align: center;
  }
`;

export const ListContainer = styled.ul`
  margin-top: 4.3rem;

  li {
    list-style: none;
    line-height: 2.4rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray[900]};

    img {
      margin-right: 3rem;
    }

    + li {
      margin-top: 3.2rem;
    }

    @media (min-width: 1200px) {
      li, strong {
        font-size: ${({ theme }) => theme.fonts.size.normal};
      }
    }
  }
`;

export const AdvantagesSection = styled.article`
  padding: 3.6rem 2.4rem;
  position: relative;

  .left-content {
    h2 {
      color: ${({ theme }) => theme.colors.brand[500]};
    }

    ${Divider} {
      margin: 0;
      margin-top: 2.7rem;
      margin-bottom: 4.3rem;
    }
  }

  .wrapper-image {
    position: relative;
    width: 35.1rem;
    height: 37.9rem;

    @media (min-width: 680px) {
      width: 65.1rem;
      height: 67.9rem;
    }

    @media (min-width: 1310px) {
      width: 85.1rem;
      height: 87.9rem;
    }
  }

  @media (min-width: 1100px) {
    margin: 11.5rem auto;
    margin-right: 0;
    display: grid;
    height: 100vh;
    grid-template-areas: 'left-content right-content';

    .left-content {
      grid-area: 'left-content';
      z-index: 3;
      max-width: 57rem;

      h2 {
        font-size: ${({ theme }) => theme.fonts.size.large};
      }
    }

    .wrapper-image {
      grid-area: 'right-content';
      position: absolute;
      right: 0;
      top: -9rem;
    }
  }

  @media (min-width: 1380px) {
    margin: 11.5rem 10rem;
  }
`;
