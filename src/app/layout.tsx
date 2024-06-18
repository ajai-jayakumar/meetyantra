import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AuthProvider, SideNav, TopBar } from '@/components';

import ReactQueryProvider from './ReactQueryProvider';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meet Yantra',
  description: 'Your one-stop solution for all your meeting needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <div className='flex'>
            <SideNav />
            <main className='w-full p-8'>
              <header>
                <TopBar />
              </header>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
