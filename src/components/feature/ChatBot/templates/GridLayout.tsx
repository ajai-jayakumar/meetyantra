import { SuggestedPrompts } from '@/types/api';

interface GridLayoutProps {
  data: SuggestedPrompts[];
}

const GridLayout = ({ data }: GridLayoutProps) => {
  return (
    <div className='block flex-grow content-center text-center'>
      <h2 className='mb-9 text-2xl'>Good day! How may I assist you today?</h2>
      <ul className='grid grid-cols-[repeat(2,minmax(100px,300px))] justify-center gap-5'>
        {data.map((item, index) => (
          <li key={index} className='h-[100px] content-center rounded-xl border p-4 text-gray-800'>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GridLayout;
