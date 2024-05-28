import Image from 'next/image';

const SelectTopicPlaceholder = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <Image src='/assets/images/chat-bot.svg' alt='chatbot' width={58} height={57} className='mb-8'></Image>
      <div className='text-xl'>Select topics to chat with Meet yantra bot</div>
    </div>
  );
};

export default SelectTopicPlaceholder;
