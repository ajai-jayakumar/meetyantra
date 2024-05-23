import { SuggestedTopics } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchChatConversations = async (): Promise<SuggestedTopics[]> => {
  const response = await fetch('https://run.mocky.io/v3/86344d52-6b75-4c94-b999-e60a4a9ed1da');
  return Promise.resolve(checkStatus(response));
};
