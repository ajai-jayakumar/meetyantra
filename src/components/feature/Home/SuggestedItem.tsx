'use client';

import { memo, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components';
import { SuggestedTopics } from '@/types/api';

interface SuggestedItemProps {
  data: SuggestedTopics[];
}

const SuggestedItem = ({ data }: SuggestedItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const topicId = searchParams.get('topic');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleTopicClick = (id: string) => {
    router.push(pathname + '?' + createQueryString('topic', id));
  };

  return (
    <ul className='text-sm text-gray-800'>
      {data.map(topic => (
        <li
          key={topic.id}
          className={`bg-red rounded p-4 py-4 ${topicId === topic.id ? 'bg-secondary text-white' : ''}`}
        >
          <Button
            variant='ghost'
            className={`h-auto w-full justify-start p-0 ${topicId === topic.id ? 'hover:text-white' : ''}`}
            onClick={() => handleTopicClick(topic.id)}
          >
            {topic.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default memo(SuggestedItem);
