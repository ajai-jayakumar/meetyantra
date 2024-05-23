import { MessageSquareMore, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fetchSuggestedTopics } from '@/lib/api/getSuggestedTopics';

import SuggestedItem from './SuggestedItem';

const SuggestedTopics = async () => {
  const topics = await fetchSuggestedTopics();

  if (!topics) return null;

  return (
    <>
      <h2 className='flex items-center gap-2 border-b border-zinc-100 p-4'>
        <MessageSquareMore size={20} /> Suggested Topics
      </h2>

      <SuggestedItem data={topics} />

      <div className='p-4'>
        <Button variant='outline'>
          <Plus className='mr-2 h-4 w-4' />
          New Topic
        </Button>
      </div>
    </>
  );
};

export default SuggestedTopics;
