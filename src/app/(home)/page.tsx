import { OminiTrafoImageWrapper, HeroSection, CTASection, WelcomeSection, ListContainer } from '@components/Home/styles';
import { Section } from '@components/Home/Section';
import { WhatsappFloat } from '@components/Home/WhatsappFloat';

import Button from '@components/shared/Button';
import { Text } from '@components/shared/Typography/Text';
import Image from 'next/image';
import { Divider } from '@components/Home/Divider';

const welcome_list = ['Monitoramento inteligente de ativos', 'Melhoria dos indicadores de continuidade',
  'Comunicação Modular', 'Business Inteligence', 'Redução de Perdas técnicas e Não técnicas'];

export default function Home() {
  return (
    <main>
      <Section hasBorderTop height="auto">
        <HeroSection>
          <div className="left-content">
            <Text as="h1" size="medium" weight={700} className="title">
              Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente
            </Text>

            <Text className="description" size="small">
              Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.
            </Text>

            <Button>Quero mais informações</Button>
          </div>


          <OminiTrafoImageWrapper>
            <Image
              src="/assets/images/home/omini-trafo.png"
              alt="Omni Trafo"
              fill
            />
          </OminiTrafoImageWrapper>

          <WhatsappFloat href="https://hvex.com.br/en" target="_blank">
            <Image
              src="/assets/images/icons/whatsapp-white.svg"
              alt="Whatsapp"
              width={39.7}
              height={40.02}
            />
          </WhatsappFloat>
        </HeroSection>
      </Section>

      <Section variant="white" height="auto">
        <WelcomeSection>
          <div className="info-container">
            <Text as="h2" size="medium" weight={700} className="title">
              Seja bem-vindo a era da energia inteligente
            </Text>

            <Text as="p" className="description">
              As redes inteligentes são um caminho sem volta,  o desenvolvimento e disceminação de dispositivos de medição e monitoramento são as ferramentas para redução de custos, perdas e trazem mais previsibilidade para as utilities de energia.
            </Text>

            <ListContainer>
              {welcome_list.map((item, index) => (
                <li key={`${item}#${index}`}>
                  <Image
                    src="/assets/images/icons/check-circle-fill--light-blue.svg"
                    alt="Icon check"
                    width={20}
                    height={20}
                  />
                  <Text as="strong" weight={700} size="normal">
                    {item}
                  </Text>
                </li>
              ))}
            </ListContainer>
          </div>

          <div className="wrapper-image">
            <Image
              src="/assets/images/home/welcome.png"
              alt="Welcome image"
              fill
            />
          </div>
        </WelcomeSection>
      </Section>

      <Section height="fit-content">
        <CTASection>
          <Text as="h3" size="normal" weight={700}>
            Quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos?
          </Text>

          <Divider />

          <Button variant="outline">
            Falar com um consultor
          </Button>
        </CTASection>
      </Section>

      <Section variant="white">
        <Text>Omini Trafo</Text>
      </Section>

      <Section variant="cream">
        <Text>dsad</Text>
      </Section>
    </main>
  );
}
