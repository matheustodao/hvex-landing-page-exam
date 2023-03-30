'use client';

import { Text } from '@components/shared/Typography/Text';
import Link from 'next/link';
import { BottomInformation, Container, MainInformation } from './styles';
import Image from 'next/image';

export function Footer() {
  return (
    <Container>
      <MainInformation>
        <div className="--content-info">
          <Image
            src="/assets/images/logo-white.svg"
            alt="HVEX logo"
            aria-label="HVEX logo"
            width={123}
            height={57}
          />
        </div>

        <div className="--content-info">
          <Text as="strong" size="normal" weight={700}>
            Endereço
          </Text>

          <div className="info">
            <Text as="address" size="small">
              R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG, 37502-508
            </Text>
          </div>
        </div>

        <div className="--content-info">
          <Text as="strong" size="normal" weight={700}>
            Contato
          </Text>

          <div className="info">
            <Text as="address" size="small">
            (35) 3622-2699
            </Text>

            <Text as="address" size="small">
            contato@hvex.com.br
            </Text>
          </div>
        </div>

        <div className="--content-info">
          <Text as="strong" size="normal" weight={700}>
            Confira nossa redes
          </Text>

          <div className="social">
            <Link href="#">
              <Image src="/assets/images/icons/social/linkedin.svg" alt="Linkedin" width={50} height={50} />
            </Link>

            <Link href="#">
              <Image src="/assets/images/icons/social/youtube.svg" alt="Youtube" width={50} height={50} />
            </Link>

            <Link href="#">
              <Image src="/assets/images/icons/social/facebook.svg" alt="Facebook" width={50} height={50} />
            </Link>

            <Link href="#">
              <Image src="/assets/images/icons/social/instagram.svg" alt="Instagram" width={50} height={50} />
            </Link>
          </div>
        </div>
      </MainInformation>

      <BottomInformation>
        <Text as="small">
          HVEX © 2021 | Todos os direitos reservados.
        </Text>

        <div className="hidden-links">
          <Link href="#">
            <Text as="small">
              Políticas de Privacidade
            </Text>
          </Link>

          <Link href="#">
            <Text as="small">
              Termos de Uso
            </Text>
          </Link>
        </div>
      </BottomInformation>
    </Container>
  );
}
