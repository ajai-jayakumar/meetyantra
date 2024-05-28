'use client';

interface TopicDiscussionProps {
  params: { slug: string };
}

export default function TopicDiscussion({ params }: TopicDiscussionProps) {
  return <div>{params.slug}</div>;
}
