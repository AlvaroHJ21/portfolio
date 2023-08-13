import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import ThemeProvider from '@/theme/ThemeProvider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NavbarBottom } from '@/components/navbar-bottom';
import '@/styles/globals.css';
// import Head from 'next/head';

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
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-transparent`}>
        <ThemeProvider>
          {/* <Navbar /> */}
          <NavbarBottom />
          <div className="texture">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
