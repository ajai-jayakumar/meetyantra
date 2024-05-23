import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ChatBotState = {
  suggestedTopicId: string;
  updateSuggestedTopicId: (_topicId: string) => void;
};

export const useChatBotStore = create<ChatBotState>()(
  devtools(set => ({
    suggestedTopicId: '',
    updateSuggestedTopicId: (_topicId: string) => set({ suggestedTopicId: _topicId }),
  }))
);
