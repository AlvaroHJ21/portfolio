import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import ThemeProvider from '@/theme/ThemeProvider';
import { NavbarDashboard } from '@/components/navbar-dashboard';
import '@/styles/globals.css';

const font = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard portfolio',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider>
          <NavbarDashboard />
          <div className="w-[90%] max-w-[1200px] py-10 m-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
