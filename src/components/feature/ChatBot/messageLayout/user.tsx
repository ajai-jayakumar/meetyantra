import { IChatConversation } from '@/types/api';

const UserMessageLayout: React.FC<IChatConversation> = ({ message }) =>
  typeof message.content === 'string' && (
    <div className='flex justify-end'>
      <div className='rounded-md bg-indigo-50 p-4'>{message.content}</div>
    </div>
  );

export default UserMessageLayout;
