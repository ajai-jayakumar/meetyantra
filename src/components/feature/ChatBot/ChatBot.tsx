'use client';

import { useSearchParams } from 'next/navigation';

import Conversation from './Conversation';
import PlaceHolder from './PlaceHolder';
import PromptInput from './PromptInput';

const ChatBot = () => {
  const searchParams = useSearchParams();
  const topicId = searchParams.get('topic');

  if (!topicId) return <PlaceHolder />;

  return (
    <div className='flex h-full flex-col justify-between'>
      <Conversation topicId={topicId} />
      <PromptInput />
    </div>
  );
};

export default ChatBot;
