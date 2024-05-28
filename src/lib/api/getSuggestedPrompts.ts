import { SuggestedPrompts } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchSuggestedPrompts = async (topicName: string): Promise<SuggestedPrompts[]> => {
  console.log(topicName);
  const response = await fetch('https://run.mocky.io/v3/ed80aa07-0d7e-4468-8d3d-b196bbdb1ef3');
  return Promise.resolve(checkStatus(response));
};
