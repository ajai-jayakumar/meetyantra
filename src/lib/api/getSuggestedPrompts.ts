import { SuggestedPrompts } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchSuggestedPrompts = async (topicId: string): Promise<SuggestedPrompts[]> => {
  console.log(topicId);
  const response = await fetch('https://run.mocky.io/v3/a2e05727-8c5b-44aa-b43f-36081b6d3750');
  return Promise.resolve(checkStatus(response));
};
