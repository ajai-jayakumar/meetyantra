'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { IChatTopics } from '@/types/api';

interface TopicListProps {
  data: IChatTopics[];
}

const TopicList = ({ data }: TopicListProps) => {
  const params = useParams<{ slug: string }>();
  return (
    <ul className='text-sm text-gray-800'>
      {data.map(topic => {
        const isRouteActive = topic.path === params.slug;
        return (
          <li
            key={topic.id}
            className={`bg-red cursor-pointer rounded p-4 py-4  ${isRouteActive ? 'bg-indigo-300 text-white hover:bg-indigo-300' : 'hover:bg-stone-100'}`}
          >
            <Link href={`/t/${topic.path}`} className='h-auto w-full justify-start p-0'>
              {topic.topic}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(TopicList);
