import { ISuggestedPrompts } from '@/types/api';

import checkStatus from './utils/checkStatus';

export const fetchSuggestedPrompts = async (topicName: string): Promise<ISuggestedPrompts> => {
  console.log(topicName);
  const response = await fetch('https://run.mocky.io/v3/ba46dd6b-2ccd-4cf6-980f-ab5a6e4b3636');
  return Promise.resolve(checkStatus(response));
};
