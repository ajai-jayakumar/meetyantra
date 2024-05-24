import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NavBar, TopBar } from '@/components';

import Provider from './providers';

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
        <div className='flex'>
          <nav className='flex w-1/6 flex-col justify-between bg-slate-100 p-4'>
            <NavBar />
          </nav>
          <main className='w-full p-8'>
            <header>
              <TopBar />
            </header>
            <Provider>{children}</Provider>
          </main>
        </div>
      </body>
    </html>
  );
}
