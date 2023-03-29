'use client';

import styled, { keyframes } from 'styled-components';
import {
  Root,
  Item as RadixItem,
  Content as RadixContent,
  Header as RadixHeader
} from '@radix-ui/react-accordion';

const slideDown = keyframes`
  from {
    height: 0.2rem;
  }

  to {
    height: max-content;
  }
`;

const slideUp = keyframes`
  from {
    height: max-content;
  }

  to {
    height: 0;
  }
`;

const rotateUp = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);
  }
`;

const rotateDown = keyframes`
  0% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(0);
  }
`;

export const Container = styled(Root)`
  --question-max-width-content: 98%;

`;

export const Item = styled(RadixItem)`
  overflow: hidden;
  margin-top: 3rem;
  width: 100%;
  border-radius: 1rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 20px -5px rgba(0, 0, 0, 0.19);

  &:first-child {
    margin-top: 0;
  }
`;

export const Header = styled(RadixHeader)`
  display: flex;
  align-items: center;
  justify-content: center;

  &, .trigger-container {
    width: 100%;
  }

  .trigger-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    padding: 2rem;

    strong {
      max-width: var(--question-max-width-content);
      text-align: left;
    }

    &[data-state="open"] {
      .caret-icon {
        animation: ${rotateUp} 300ms ease-in;
        transform: rotate(-180deg);
      }
    }

    &[data-state="closed"] {
      .caret-icon {
        animation: ${rotateDown} 300ms ease-in;
      }
    }
  }
`;

export const Content = styled(RadixContent)`
  overflow: hidden;
  width: 100%;
  padding: 2rem;
  padding-top: 0;

  &[data-state="open"] {
    animation: ${slideDown} 200ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state="closed"] {
    animation: ${slideUp} 200ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  p {
    max-width: var(--question-max-width-content);
    line-height: 2.4rem;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background: #D9D9D9;
  margin-bottom: 2rem;
  max-width: var(--question-max-width-content);
`;
