import { Badge } from '@/components';

const SuggestedTopics = () => {
  return (
    <>
      <h2 className='mb-7 text-2xl font-medium'>Hi Jason,</h2>
      <p className='mb-5 text-xl'>Here are some suggested topics</p>

      <ul className='mb-6 flex gap-3'>
        <li>
          <Badge variant='outline' className='px-5 py-2 text-base font-medium text-neutral-500'>
            Introduction
          </Badge>
        </li>
        <li>
          <Badge variant='outline' className='px-5 py-2 text-base font-medium text-neutral-500'>
            Application List
          </Badge>
        </li>
        <li>
          <Badge variant='outline' className='px-5 py-2 text-base font-medium text-neutral-500'>
            Onboarding
          </Badge>
        </li>
      </ul>
    </>
  );
};

export default SuggestedTopics;
