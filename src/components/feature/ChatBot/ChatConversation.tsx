import { IChatConversation } from '@/types/api';

import BotMessageLayout from './messageLayout/bot';
import UserMessageLayout from './messageLayout/user';
import TypeDetails from './templates/TypeDetails';
import TypeListMeetings from './templates/TypeListMeetings';
import TypeMeeting from './templates/TypeMeeting';

type MessageLayoutComponent = React.FC<IChatConversation>;

const messageLayoutMap: Record<string, MessageLayoutComponent> = {
  user: UserMessageLayout,
  assistant: BotMessageLayout,
};

const ChatConversation: React.FC<{ data: IChatConversation[] }> = ({ data }) => {
  return (
    <div className='h-full p-8'>
      {data.map((item, index) => {
        const MessageLayout = messageLayoutMap[item.message.author] || BotMessageLayout;
        return (
          <div key={index} className='mb-4'>
            <MessageLayout {...item} />
          </div>
        );
      })}
      <TypeListMeetings />
      <TypeMeeting />
      <TypeDetails />
    </div>
  );
};

export default ChatConversation;
