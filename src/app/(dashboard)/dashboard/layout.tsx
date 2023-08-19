import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import ThemeProvider from '@/providers/ThemeProvider';
import '@/styles/globals.css';
import AuthProvider from '@/providers/AuthProvider';
import { NavbarDashboard } from '@/components/nav';

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
            <div className="w-[90%] max-w-[1200px] py-10 m-auto">{
            
            
            
            children
            
            }</div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
