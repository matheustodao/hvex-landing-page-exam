import Image from 'next/image';

import { OmniTrafoImageWrapper, HeroSection, CTASection, WelcomeSection, ListContainer, AdvantagesSection, AboutOmniDeviceSection } from '@components/Home/styles';
import { Section } from '@components/Home/Section';
import { WhatsappFloat } from '@components/Home/WhatsappFloat';

import Button from '@components/shared/Button';
import { Text } from '@components/shared/Typography/Text';
import { Divider } from '@components/Home/Divider';
import { CharacteristicOmniCard } from '@components/Home/CharacteristicOmniCard';

const welcome_list = ['Monitoramento inteligente de ativos', 'Melhoria dos indicadores de continuidade',
  'Comunicação Modular', 'Business Inteligence', 'Redução de Perdas técnicas e Não técnicas'];

const advantages = ['Balanço energético', 'Auto-diagnóstico dos transformadores', 'Medidor ideal para consumidores comerciais, industriais', 'À prova de fraude', 'Melhoria dos Indicadores de Continuidade', 'Maior vida útil do ativo', 'Acompanhamento em tempo real das condições do equipamento'];

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


          <OmniTrafoImageWrapper>
            <Image
              src="/assets/images/home/omni-trafo.png"
              alt="Omni Trafo"
              fill
            />
          </OmniTrafoImageWrapper>

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

      <Section>
        <AboutOmniDeviceSection>
          <div className="left-content">
            <Text as="strong" size="large" weight={700}>
              OMNI TRAFO
            </Text>

            <Text as="h2" size="large" weight={700}>
              É o dispositivo capaz de integrar os transformadores as redes inteligentes
            </Text>

            <Text size="normal">
              O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.
            </Text>
          </div>

          <div className="characteristics-list">
            <CharacteristicOmniCard
              label="Sistema de Proteção"
              icon={{
                src: 'renewable-energy',
              }}
            />

            <CharacteristicOmniCard
              label="Integração de dados"
              icon={{
                src: 'data-integration',
              }}
            />

            <CharacteristicOmniCard
              label="Gestão de Ativos Elétricos"
              icon={{
                src: 'manage-electronics',
              }}
            />


            <CharacteristicOmniCard
              label="Comunicação inteligente"
              icon={{
                src: 'smart-communication',
              }}
            />
          </div>
        </AboutOmniDeviceSection>
      </Section>

      <Section variant="white">
        <Text>Omini Trafo</Text>
      </Section>

      <Section variant="cream" height="full">
        <AdvantagesSection>
          <div className="left-content">
            <Text as="h2" size="large" weight={700}>
              Desenvolvido para melhorar a performance dos ativos de distribuição
            </Text>
            <Divider />

            <ListContainer>
              {advantages.map((item, index) => (
                <li key={`${item}#${index}`}>
                  <Image
                    src="/assets/images/icons/check-circle-fill--deep-blue.svg"
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
              src="/assets/images/home/omni-tranformer.png"
              alt="Omni tranformer"
              fill
            />
          </div>
        </AdvantagesSection>
      </Section>


      <Section height="fit-content" variant="navy-blue">
        <CTASection>
          <Text as="h3" size="large" weight={700}>
            Quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos?
          </Text>

          <Divider />

          <Button variant="outline">
            Falar com um consultor
          </Button>
        </CTASection>
      </Section>
    </main>
  );
}
