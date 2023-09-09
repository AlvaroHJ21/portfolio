import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { AnimationsProvider, ThemeProvider } from '@/providers';
import { Footer } from '@/components/footer';
import { NavbarBottom } from '@/components/shared';
import { Cursor, CursorProvider } from '@/components/ui';
import '@/styles/globals.css';

const font = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
  description: 'Alvaro Huaysara Jauregui | Full Stack Web Developer | Systems Engineer',
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
          <AnimationsProvider>
            <CursorProvider>
              {/* <Navbar /> */}
              <NavbarBottom />
              {/* <div className="texture">{children}</div> */}
              {children}
              <Footer />

              <Cursor />
            </CursorProvider>
          </AnimationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
