import { Button } from '@/components';

const TypeMeeting = () => {
  return (
    <div className='my-4'>
      <div className='rounded-lg bg-zinc-100 p-4 leading-8'>
        <span className='text-lg font-semibold'>Meeting for UI Screens</span>
        <div className='flex flex-row gap-4 text-gray-600'>
          <div>
            <span className='font-medium'>@Hrishi, @Ajai, </span>
            <span>shubham@my.com</span>
          </div>
          <span>May 20, 2024 at 1:00 PM - 1:30 PM</span>
        </div>
        <div className='my-2 inline-block rounded-lg border border-rose-500 bg-white p-4'>
          <span>This meeting overlaps with another, for shubham@my.com </span>
          <br />
          <span className='text-sm text-gray-600'>New suggested time: May 20, 2024 at 3:00 PM - 3:30 PM</span>
        </div>
      </div>
      <div className='mt-3 flex flex-row gap-2'>
        <Button>Confirm this meeting</Button>
        <Button variant='outline'>Schedule for suggested time</Button>
        <Button variant='outline'>Cancel</Button>
      </div>
    </div>
  );
};

export default TypeMeeting;
