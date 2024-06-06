import { Button, Checkbox } from '@/components';

const TypeListMeetings = () => {
  return (
    <div className='my-4'>
      <div className='rounded-lg bg-zinc-100 p-4 leading-8'>
        <div className='flex items-center gap-2'>
          <Checkbox />
          <span className='font-semibold'>Product Catchup</span>|
          <span className='font-semibold text-gray-600'>@Shubham, @Chandra</span> <span>+3more</span>
          <span className='text-sm text-gray-600'>| May 22, 2024 at 1:30 PM</span>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox />
          <span className='font-semibold'>1 V 1 with Team</span>|
          <span className='font-semibold text-gray-600'>@Shubham</span>
          <span className='text-sm text-gray-600'>| May 22, 2024 at 3:30 PM (Recurring every wednesday)</span>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox />
          <span className='font-semibold'>Workshop for New release</span>|
          <span className='font-semibold text-gray-600'>@Shubham, @Chandra </span>
          <span>+16more</span>
          <span className='text-sm text-gray-600'>| May 29, 2024 at 11:30 PM</span>
        </div>
      </div>
      <div className='mt-3 flex flex-row gap-2'>
        <Button> Remove all meetings</Button>
        <Button variant='outline'> Remove only selected meetings</Button>
      </div>
    </div>
  );
};

export default TypeListMeetings;
