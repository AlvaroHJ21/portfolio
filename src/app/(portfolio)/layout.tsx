import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { ThemeProvider } from '@/providers';
import Footer from '@/components/shared/footer';
import { NavbarBottom, NetworksLinksVertical } from '@/components/shared';
import { CursorProvider } from '@/contexts/cursor';
import { Cursor } from '@/components/atoms';
import '@/styles/globals.css';

const font = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
  description:
    'Apasionado por crear soluciones web innovadoras. Experto en tecnologías front-end y back-end, estoy comprometido con la calidad, la usabilidad y la eficiencia en cada proyecto. Siempre en busca de nuevos desafíos y oportunidades para aprender y crecer en el mundo del desarrollo web.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${font.className} bg-gray-50 dark:bg-background selection:bg-primary selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CursorProvider>
            {children}
            <NavbarBottom />
            <NetworksLinksVertical />
            <Cursor />
            <Footer />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
