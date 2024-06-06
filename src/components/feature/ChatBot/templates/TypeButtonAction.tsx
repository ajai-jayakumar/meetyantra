import { Button } from '@/components';
import { IResponseDetails } from '@/types/api';

const TypeButtonAction = ({ children }: { children: IResponseDetails }) => {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((item: { label: string }) => (
          <Button key={item.label} className='mr-2'>
            {item.label}
          </Button>
        ))}
      </>
    );
  }
  return null;
};

export default TypeButtonAction;
