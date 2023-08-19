import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import ThemeProvider from '@/providers/ThemeProvider';
import { Footer } from '@/containers/footer/footer';
import { NavbarBottom } from '@/components/nav';
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
    <html lang="en" className="">
      <body className={`${font.className} bg-gray-50 dark:bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Navbar /> */}
          <NavbarBottom />
          <div className="texture">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
