import { IconBadgeFilename } from '../Badge';

export const welcome_list = ['Monitoramento inteligente de ativos', 'Melhoria dos indicadores de continuidade',
  'Comunicação Modular', 'Business Inteligence', 'Redução de Perdas técnicas e Não técnicas'];

export const advantages = ['Balanço energético', 'Auto-diagnóstico dos transformadores', 'Medidor ideal para consumidores comerciais, industriais', 'À prova de fraude', 'Melhoria dos Indicadores de Continuidade', 'Maior vida útil do ativo', 'Acompanhamento em tempo real das condições do equipamento'];

export const faq: { label: string, description: string }[] = [
  {
    label: 'Pra que tipo de transformador é feito o medidor inteligente da HVEX (Omni Trafo)?',
    description: 'O Omni trafo foi desenvolvido para integrar transformadores de distribuição as redes inteligentes, o dispositivo é ideal para concessionárias, fabricantes de transformadores, ou empresas privadas que desejam ter mais controle  e informações de sua rede elétrica'
  },

  {
    label: 'O omni trafo pode ser utilizado como um medidor de qualidade de energia (qualimetro)?',
    description: 'Não, nesse caso o caso recomendamos a utilização de um modelo específico.',
  },

  {
    label: 'O omni trafo pode ser utilizado como um medidor de faturamento?',
    description: 'Não, nesse caso não recomendamos o nosso medidor, nesse caso recomendamos modelos especificados pelo módulo do PRODIST e homologados pela concessionária.'
  },

  {
    label: 'Ele pode ser instalado em transformadores que já estão em campo ?',
    description: 'Sim, o dispositivo pode ser instalado em equipamentos em operação, porem a aferição de temperatura do topo de óleo será apenas ambiente.'
  }
];

interface Badge {
  title: string,
  src: IconBadgeFilename
}
export const badges: Badge[] = [
  {
    title: 'Monitoramento de  tensão, corrente e carga;',
    src: 'dashboard',
  },

  {
    title: 'Análise de perda de vida útil do transformador;',
    src: 'growth',
  },

  {
    title: 'Medição do balanço energético de Perdas',
    src: 'up-and-down-arrow',
  },

  {
    title: 'Detecção de faltas na rede elétrica',
    src: 'no-charges',
  },

  {
    title: 'Análise de Fator de potência',
    src: 'bpm',
  },

  {
    title: 'Harmônicas de corrente e tensão',
    src: 'harmonics',
  },

  {
    title: 'Medição de temperatura interna',
    src: 'thermometer',
  },

  {
    title: 'Supervisão de  baixa tensão',
    src: 'battery',
  }
];
