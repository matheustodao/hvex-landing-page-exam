'use client';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@components/shared/Button';

import { Container, Content, Nav, Route } from './styles';
import { lpRoutes } from './utils/routes';
import { Text } from '@components/shared/Typography/Text';

// Landing Page header -> short name -> LP Header
export function LPHeader() {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Image
            src="/assets/images/logo-white.svg"
            alt="HVEX Logo"
            width={123}
            height={27}
          />
        </Link>

        <Content>
          <ul>
            {lpRoutes.map((route, index) => (
              <Route key={`${route.label}-${index}-${route.link}`}>
                <Link href={route.link}>
                  <Text as="small" weight={700} size="small">
                    {route.label}
                  </Text>
                </Link>
              </Route>
            ))}
          </ul>

          <Button variant="outline">
            Comprar Agora
          </Button>
        </Content>
      </Nav>
    </Container>
  );
}
