import ChatConversation from '@/components/feature/ChatBot/ChatConversation';
import PromptInput from '@/components/feature/ChatBot/PromptInput';
import PromptSuggestions from '@/components/feature/ChatBot/PromptSuggestions';
import { fetchChatConversations } from '@/lib/api/fetchChatConversations';

interface TopicDiscussionProps {
  params: { slug: string };
}

async function TopicDiscussion({ params }: TopicDiscussionProps) {
  const chatHistory = await fetchChatConversations();

  if (chatHistory.length === 0) {
    return (
      <div className='flex h-full flex-col'>
        <PromptSuggestions topicName={params.slug} />
        <PromptInput />
      </div>
    );
  }
  return (
    <div className='flex h-full flex-col justify-between'>
      <ChatConversation data={chatHistory} />
      <PromptInput />
    </div>
  );
}

export default TopicDiscussion;
