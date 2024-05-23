'use client';

import { Button } from '@/components';
import { useChatBotStore } from '@/store/chatBotStore';
import { SuggestedTopics } from '@/types/api';

interface SuggestedItemProps {
  data: SuggestedTopics[];
}

const SuggestedItem = ({ data }: SuggestedItemProps) => {
  const activeTopic = useChatBotStore(state => state.suggestedTopicId);
  const setTopicId = useChatBotStore(state => state.updateSuggestedTopicId);

  const handleTopicClick = (id: string) => {
    setTopicId(id);
  };

  return (
    <ul className='text-sm text-gray-800'>
      {data.map(topic => (
        <li
          key={topic.id}
          className={`bg-red rounded p-4 py-4 ${activeTopic === topic.id ? 'bg-secondary text-white' : ''}`}
        >
          <Button
            variant='ghost'
            className={`h-auto w-full justify-start p-0 ${activeTopic === topic.id ? 'hover:text-white' : ''}`}
            onClick={() => handleTopicClick(topic.id)}
          >
            {topic.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SuggestedItem;
