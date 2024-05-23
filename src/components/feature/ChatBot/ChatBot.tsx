'use client';

import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

import { Button, Input } from '@/components';
import { useGetSuggestedPrompts } from '@/hooks/useGetSuggestedPrompts';
import { useChatBotStore } from '@/store/chatBotStore';

import GridLayout from './templates/GridLayout';

const ChatBot = () => {
  const topicId = useChatBotStore(state => state.suggestedTopicId);
  const { isPending, error, data } = useGetSuggestedPrompts(topicId);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div className='flex h-full flex-col justify-between'>
      <GridLayout data={data} />
      <div className='inherit px-8'>
        <p className='mb-2 flex justify-end gap-1 text-primary'>
          <Image src='/assets/images/brush.svg' alt='magic-brush' width={24} height={24} />
          Suggested prompts
        </p>
        <div className='relative flex'>
          <Input className='mb-8 h-16 pr-16' placeholder='Type "/" for prompts' />
          <Button className='absolute right-4 top-3 w-[40px] rounded-lg bg-primary p-1 text-white'>
            <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
