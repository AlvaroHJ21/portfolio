import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import ThemeProvider from '@/providers/ThemeProvider';
import { Footer } from '@/containers/footer/footer';
import { NavbarBottom } from '@/components/nav';
import '@/styles/globals.css';
import { MagicCursor } from '@/components/cursor/magic-cursor';
import { CursorProvider } from '@/components/cursor/CursorContext';

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
      <body className={`${font.className} bg-gray-50 dark:bg-background selection:bg-primary selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CursorProvider>
            {/* <Navbar /> */}
            <NavbarBottom />
            {/* <div className="texture">{children}</div> */}
            {children}
            <Footer />

            <MagicCursor />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
