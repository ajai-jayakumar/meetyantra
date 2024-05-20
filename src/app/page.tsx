import { ChatBot, SuggestedTopics, TopBar } from '@/components';

export default function Home() {
  return (
    <main className='flex h-[calc(100vh-4rem)] flex-col'>
      <header>
        <TopBar />
      </header>
      <section className='flex flex-grow rounded-xl border border-neutral-300'>
        <div className='w-1/5 border-r'>
          <SuggestedTopics />
        </div>
        <div className='w-full'>
          <ChatBot />
        </div>
      </section>
    </main>
  );
}
