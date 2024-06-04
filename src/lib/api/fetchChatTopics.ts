import { IChatTopics } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchChatTopics = async (): Promise<IChatTopics[]> => {
  const response = await fetch('https://run.mocky.io/v3/82832944-bc39-43e5-9772-26b8d50791ca');
  return Promise.resolve(checkStatus(response));
};
