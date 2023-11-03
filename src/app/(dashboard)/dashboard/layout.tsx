import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { AuthProvider, ThemeProvider } from '@/providers';
import { NavbarDashboard } from '@/components/shared';
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
      <body className={`${font.className} bg-background text-gray-300`}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavbarDashboard />
            <div className="container py-10">{children}</div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
