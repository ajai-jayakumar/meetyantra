import { MessageSquareMore, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fetchChatTopics } from '@/lib/api/fetchChatTopics';

import TopicList from './TopicList';

const Topics = async () => {
  const data = await fetchChatTopics();

  return (
    <>
      <h2 className='flex items-center gap-2 border-b border-zinc-100 p-4'>
        <MessageSquareMore size={20} /> Topics
      </h2>

      <TopicList data={data} />

      <div className='p-4'>
        <Button variant='outline'>
          <Plus className='mr-2 h-4 w-4' />
          New Topic
        </Button>
      </div>
    </>
  );
};

export default Topics;
