'use client';

import { forwardRef } from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';
import {
  AccordionSingleProps,
  AccordionMultipleProps,
  AccordionItemProps as RadixAccordionItemProps
} from '@radix-ui/react-accordion';

import { Text } from '@components/shared/Typography/Text';
import { Container, Header, Content, Item, Separator } from './styles';
import Image from 'next/image';

type AccordionContainerProps = AccordionSingleProps | AccordionMultipleProps;

interface AccordionItemProps extends RadixAccordionItemProps {
  label: string,
  description: string,
}

export const AccordionContainer = forwardRef<HTMLDivElement, AccordionContainerProps>(({ children, ...props }, RootRef) => {
  return (
    <Container ref={RootRef} {...props}>
      {children}
    </Container>
  );
});

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ label, description, ...props }, ItemRef) => {
  return (
    <Item ref={ItemRef} {...props} role="accordion-item">
      <Header>
        <RadixAccordion.Trigger className="trigger-container">
          <Text as="strong" weight={700} role="accordion-title">
            {label}
          </Text>

          <Image
            src="/assets/images/icons/caret-down.svg"
            alt="open"
            width={12}
            height={7}
            className="caret-icon"
          />
        </RadixAccordion.Trigger>
      </Header>

      <Content>
        <Separator />
        <Text role="accordion-description">
          {description}
        </Text>
      </Content>
    </Item>
  );
});

