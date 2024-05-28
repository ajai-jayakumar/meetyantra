import { ChatConversation } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchChatConversations = async (): Promise<ChatConversation[]> => {
  const response = await fetch('https://run.mocky.io/v3/ddc9a82b-6756-408c-aeea-7183c5456c02');
  return Promise.resolve(checkStatus(response));
};
