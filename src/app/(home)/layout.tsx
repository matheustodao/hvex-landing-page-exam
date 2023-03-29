import { LayoutSetup } from '@/presentation/components/shared/config/layout/LayoutSetup';
import { Footer } from '@components/Home/Footer';
import { LPHeader } from '@components/shared/header/LPHeader';

export const metadata = {
  title: 'HVEX',
  description: 'Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutSetup>
          <LPHeader />
          {children}
          <Footer />
        </LayoutSetup>
      </body>
    </html>
  );
}
