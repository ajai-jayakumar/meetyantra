import Image from 'next/image';

import TopBar from '@/components/layouts/HomeTopBar/HomeTopBar';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <main className='flex h-[calc(100vh-4rem)] flex-col'>
      <header>
        <TopBar />
      </header>
      <section>
        <h2 className='mb-7 text-2xl font-medium'>Hi Jason,</h2>
        <p className='mb-5 text-xl'>Here are some suggested topics</p>
        <ul className='mb-6 flex gap-3'>
          <li>
            <Badge variant='outline' className='px-5 py-2 text-base font-medium text-neutral-500'>
              Introduction
            </Badge>
          </li>
          <li>
            <Badge variant='outline' className='px-5 py-2 text-base font-medium text-neutral-500'>
              Application List
            </Badge>
          </li>
          <li>
            <Badge variant='outline' className='px-5 py-2 text-base font-medium text-neutral-500'>
              Onboarding
            </Badge>
          </li>
        </ul>
      </section>
      <section className='flex-grow rounded-xl border border-neutral-300'>
        <div className='flex h-full flex-col items-center justify-center'>
          <Image src='/assets/images/chat-bot.svg' alt='chatbot' width={58} height={58} className='mb-8'></Image>
          <div className='text-xl'>Select topics to chat with Meet yantra bot</div>
        </div>
      </section>
    </main>
  );
}
