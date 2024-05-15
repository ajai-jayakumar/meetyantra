import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/components/layouts/NavBar/NavBar';
import TopBar from '@/components/layouts/TopBar/TopBar';

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
        <div className='flex h-dvh flex-row'>
          <NavBar />
          <main className='w-full p-8'>
            <TopBar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
