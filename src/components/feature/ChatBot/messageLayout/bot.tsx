import Image from 'next/image';

import { IChatConversation } from '@/types/api';

import TypeButtonAction from '../templates/TypeButtonAction';
import TypeText from '../templates/TypeText';

const messageTemplateMap = {
  valid_response: TypeText,
  summary_text: TypeText,
  options: TypeButtonAction,
};

const BotMessageLayout: React.FC<IChatConversation> = data => {
  if (typeof data.message.content === 'object') {
    return (
      <div className='flex items-start'>
        <Image src='/assets/images/chat-bot-profile.svg' width={25} height={25} alt='bot-profile-img'></Image>
        <div className='ml-2'>
          {data.message.content.map((msg, index) => {
            const Template = messageTemplateMap[msg.type];
            return (
              <div key={index}>
                <Template>{msg.prompt_details}</Template>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default BotMessageLayout;
