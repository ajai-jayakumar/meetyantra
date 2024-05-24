import { useGetSuggestedPrompts } from '@/hooks/useGetSuggestedPrompts';

import GridLayout from './templates/GridLayout';

const Conversation = ({ topicId }: { topicId: string }) => {
  const { isPending, error, data } = useGetSuggestedPrompts(topicId);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return <GridLayout data={data} />;
};

export default Conversation;
