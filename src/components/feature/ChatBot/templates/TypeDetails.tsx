import { Button } from '@/components';

const TypeDetails = () => {
  return (
    <div className='my-4'>
      <div className='flex flex-col rounded-lg bg-zinc-100 p-4 leading-8 text-gray-600'>
        <span className='text-lg font-semibold text-black'>WCGA Issue for admin</span>
        <span>Assigned to: Ajai</span>
        <span>Due Date: 22 May 2024</span>
        <span>
          Description: AI chat bots are gaining popularity due to their ability to simulate human-like conversations and
          provide automated support across various industries.{' '}
        </span>
      </div>

      <div className='mt-3 flex flex-row items-center gap-2'>
        <Button>Confirm assignee change</Button>
        <Button variant='outline'>Cancel</Button>
        View on JIRA
      </div>
    </div>
  );
};

export default TypeDetails;
