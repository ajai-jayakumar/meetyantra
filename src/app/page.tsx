import { ChatBot, SuggestedTopics } from '@/components';

export default function Home() {
  return (
    <div className='flex h-[calc(100vh-8rem)] flex-col'>
      <section className='flex flex-grow rounded-xl border border-neutral-300'>
        <div className='w-1/5 border-r'>
          <SuggestedTopics />
        </div>
        <div className='w-full'>
          <ChatBot />
        </div>
      </section>
    </div>
  );
}
