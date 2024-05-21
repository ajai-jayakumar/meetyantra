const GridLayout = () => {
  return (
    <div className='block flex-grow content-center text-center'>
      <h2 className='mb-9 text-2xl'>Good day! How may I assist you today?</h2>
      <ul className='grid grid-cols-[repeat(2,minmax(100px,300px))] justify-center gap-5'>
        <li className='h-[100px] content-center rounded-xl border p-4 text-gray-800'>
          Which was the most attended meeting last week?
        </li>
        <li className='h-[100px] content-center rounded-xl border p-4 text-gray-800'>
          Which was the most attended meeting last month?
        </li>
        <li className='h-[100px] content-center rounded-xl border p-4 text-gray-800'>Last week updates </li>
        <li className='h-[100px] content-center rounded-xl border p-4 text-gray-800'>Summarise last week</li>
      </ul>
    </div>
  );
};

export default GridLayout;
