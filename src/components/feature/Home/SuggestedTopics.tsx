import { MessageSquareMore, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

// TODO: Replace static data with dynamic data
const SuggestedTopics = () => {
  return (
    <>
      <h2 className='flex items-center gap-2 border-b border-zinc-100 p-4'>
        <MessageSquareMore size={20} /> Suggested Topics
      </h2>
      <ul className='p-4 text-sm text-gray-800'>
        <li className='py-4'>Introduction</li>
        <li className='py-4'>Application List</li>
        <li className='py-4'>Onboarding</li>
        <li className='py-4'>
          <Button variant='outline'>
            <Plus className='mr-2 h-4 w-4' />
            New Topic
          </Button>
        </li>
      </ul>
    </>
  );
};

export default SuggestedTopics;
