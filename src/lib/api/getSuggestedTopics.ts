import { SuggestedTopics } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchSuggestedTopics = async (): Promise<SuggestedTopics[]> => {
  const response = await fetch('https://run.mocky.io/v3/e394e2b2-2e58-4a0f-a773-00ed087fc2b9');
  return Promise.resolve(checkStatus(response));
};
