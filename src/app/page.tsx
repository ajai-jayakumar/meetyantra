import { ChatBox, SuggestedTopics, TopBar } from '@/components';

export default function Home() {
  return (
    <main className='flex h-[calc(100vh-4rem)] flex-col'>
      <header>
        <TopBar />
      </header>
      <section>
        <SuggestedTopics />
      </section>
      <section className='flex-grow rounded-xl border border-neutral-300'>
        <ChatBox />
      </section>
    </main>
  );
}
