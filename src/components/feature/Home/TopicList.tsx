'use client';

import { memo } from 'react';
import Link from 'next/link';

import { IChatTopics } from '@/types/api';

interface TopicListProps {
  data: IChatTopics[];
}

const TopicList = ({ data }: TopicListProps) => {
  return (
    <ul className='text-sm text-gray-800'>
      {data.map(topic => (
        <li key={topic.id} className='bg-red rounded p-4 py-4'>
          <Link href={`/t/${topic.path}`} className='h-auto w-full justify-start p-0'>
            {topic.topic}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(TopicList);
