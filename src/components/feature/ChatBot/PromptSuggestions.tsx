import { fetchSuggestedPrompts } from '@/lib/api/fetchSuggestedPrompts';

type PromptSuggestionsProps = {
  topicName: string;
};

const PromptSuggestions: React.FC<PromptSuggestionsProps> = async props => {
  const data = await fetchSuggestedPrompts(props.topicName);
  const prompts = data?.prompt_details?.messages;

  if (!prompts) {
    return null;
  }

  return (
    <div className='block flex-grow content-center text-center'>
      <h2 className='mb-9 text-2xl'>Good day! How may I assist you today?</h2>
      <ul className='grid grid-cols-[repeat(2,minmax(100px,300px))] justify-center gap-5'>
        {prompts.map(item => (
          <li key={item} className='h-[100px] cursor-pointer content-center rounded-xl border p-4 text-gray-800'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptSuggestions;
