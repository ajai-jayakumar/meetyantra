import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components';
import { Input } from '@/components/ui/input';

import GridLayout from './templates/GridLayout';
// import PlaceHolder from './PlaceHolder';

const ChatBot = () => {
  return (
    <div className='flex h-full flex-col justify-between'>
      {/* <PlaceHolder /> */}
      <GridLayout />
      <div className='inherit px-8'>
        <p className='mb-2 flex justify-end gap-1 text-primary'>
          <Image src='/assets/images/brush.svg' alt='magic-brush' width={24} height={24} />
          Suggested prompts
        </p>
        <div className='relative flex'>
          <Input className='mb-8 h-16 pr-16' placeholder='Type "/" for prompts' />
          <Button className='absolute right-4 top-3 w-[40px] rounded-lg bg-primary p-1 text-white'>
            <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
