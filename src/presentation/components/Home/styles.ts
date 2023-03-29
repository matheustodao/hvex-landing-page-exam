'use client';

import styled from 'styled-components';
import { Divider } from './Divider';

interface OmniTrafoImageWrapperProps {
  invert?: boolean;
}

export const OmniTrafoImageWrapper = styled.div<OmniTrafoImageWrapperProps>`
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

  ${OmniTrafoImageWrapper} {
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
      margin: auto 5.6rem;
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

    ${OmniTrafoImageWrapper} {
      margin-top: 0;
      margin-left: -34rem;
      grid-area: right-content;
    }
  }

  @media (min-width: 1200px) {
    .left-content {
      margin: auto 13.5rem;
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

    @media (min-width: 1200px) {
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

  @media (min-width: 1200px) {
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
  padding: 7.1rem;

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

    @media (max-width: 305px) {
      width: 100%;
      height: 27.9rem;
    }

    @media (max-width: 375px) {
      width: 25.1rem;
      height: 27.9rem;
    }

    @media (min-width: 680px) {
      width: 65.1rem;
      height: 67.9rem;
    }

    @media (min-width: 1400px) {
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
    margin-bottom: 0;

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

  @media (min-width: 1200px) {
    margin: 11.5rem 10rem;
    margin-bottom: 0;
  }
`;

export const AboutOmniDeviceSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.6rem 2.4rem;

  height: 100%;

  .left-content {
    display: flex;
    flex-direction: column;
    max-width: 54.4rem;
    margin-bottom: 5.6rem;

    h2 {
      color: ${({ theme }) => theme.colors.brand[200]};
      margin-top: 5.3rem;
      margin-bottom: 3rem;
    }

    p {
      line-height: 3.1rem;
    }
  }

  .characteristics-list {
    display: flex;
    gap: 3.2rem;
    overflow-x: scroll;
    max-width: 100%;

    > div {
      min-width: 242.65px;
      flex: 1 1 242.65px;
    }
  }

  @media (min-width: 1135px) {
    padding: 5.5rem 2.6rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;

    gap: 5.6rem;

    .left-content {
      margin-bottom: 0;
    }

    .characteristics-list {
      overflow-x: hidden;
      display: grid;
      grid-template-columns: repeat(2, auto);
      max-width: 100vw;
    }
  }

  @media (min-width: 1370px) {
    padding: 5.5rem 13.6rem;
  }
`;

export const PresentationSection = styled.article`
  padding: 4.6rem 2.4rem;
  display: flex;
  flex-direction: column;

  .list-badge {
    display: flex;
    flex-wrap: wrap;
    gap: 2.8rem;
    margin-top: 11.4rem;
  }

  .right-content {
    ${Divider} {
      margin: 2.4rem 0;
    }

    p {
      margin-top: 2.4rem;
    }
  }

  ${OmniTrafoImageWrapper} {
    display: none;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, auto);

    ${OmniTrafoImageWrapper} {
      display: block;
    }
    .right-content {
      grid-column-start: 2;

      h2 {
        max-width: 50.5rem;
      }

      p {
        max-width: 67.2rem;
      }
    }

    ${OmniTrafoImageWrapper} {
      grid-column-start: 1;
      grid-row-start: 1;
      margin-right: 4.6rem;
    }
  }

  @media (min-width: 1290px) {
    padding: 6.2rem 4.5rem;
  }

  @media (min-width: 1312px) {
    .list-badge {
      display: grid;
      grid-template-columns: repeat(3, auto);
    }
  }
`;

export const FAQSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7.4rem auto;

  h2 {
    text-align: center;
  }

  .faq-container {
    max-width: 77rem;
    width: 100%;
    margin-top: 6rem;

    .trigger-container {
      strong {
        min-height: 3.8rem;
        display: flex;
        align-items: center;
      }
    }
  }
`;
