import { ChatBot, SuggestedTopics, TopBar } from '@/components';

export default function Home() {
  return (
    <main className='flex h-[calc(100vh-4rem)] flex-col'>
      <header>
        <TopBar />
      </header>
          <ChatBot />
      </section>
    </main>
  );
}
