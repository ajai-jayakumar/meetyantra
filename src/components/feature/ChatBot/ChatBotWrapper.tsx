'use client';

import { useChatBotStore } from '@/store/chatBotStore';

import ChatBot from './ChatBot';
import PlaceHolder from './PlaceHolder';

const ChatBotWrapper = () => {
  const suggestedTopicId = useChatBotStore(state => state.suggestedTopicId);

  if (!suggestedTopicId) return <PlaceHolder />;

  return <ChatBot />;
};

export default ChatBotWrapper;
