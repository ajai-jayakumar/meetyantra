import { useQuery } from '@tanstack/react-query';

import { fetchSuggestedPrompts } from '@/lib/api/getSuggestedPrompts';

export const useGetSuggestedPrompts = (topicId: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['suggestedTopicId', topicId],
    queryFn: () => fetchSuggestedPrompts(topicId),
  });

  return { isPending, error, data };
};
