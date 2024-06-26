import { ChatTopics, SelectTopicPlaceholder } from '@/components';

export default function Home() {
  return (
    <div className='flex h-[calc(100vh-8rem)] flex-col'>
      <section className='flex flex-grow rounded-xl border border-neutral-300'>
        <div className='w-1/5 border-r'>
          <ChatTopics />
        </div>
        <div className='w-full'>
          <SelectTopicPlaceholder />
        </div>
      </section>
    </div>
  );
}
