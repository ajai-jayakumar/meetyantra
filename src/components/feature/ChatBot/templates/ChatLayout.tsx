import { ChatConversation } from '@/types/api';

interface ChatLayoutProps {
  data: ChatConversation[];
}

const ChatLayout = ({ data }: ChatLayoutProps) => {
  return data.map((item, index) => (
    <div key={index} className='flex items-center justify-start'>
      <div className='flex items-center'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white'>
          {item.message.author.role}
        </div>
        <div className='ml-2'>
          <div className='text-sm font-bold'>{item.message.author.role}</div>
          <div className='text-sm'>{item.message.content}</div>
        </div>
      </div>
    </div>
  ));
};

export default ChatLayout;
