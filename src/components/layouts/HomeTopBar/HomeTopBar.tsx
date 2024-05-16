import { CircleHelp, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TopBar = () => {
  return (
    <div className='mb-8 flex justify-between'>
      <Input placeholder='Search' className='w-1/3 bg-gray-50' />
      <div className='flex items-center gap-4'>
        <Button className='px-6 tracking-wide'>
          <Plus className='mr-2 h-4' /> Join a meeting
        </Button>
        <CircleHelp />
      </div>
    </div>
  );
};

export default TopBar;
