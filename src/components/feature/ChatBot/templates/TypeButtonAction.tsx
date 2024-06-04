import { IResponseDetails } from '@/types/api';

const TypeButtonAction = ({ children }: { children: IResponseDetails }) => {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((item: { label: string }) => (
          <button key={item.label}>{item.label}</button>
        ))}
      </>
    );
  }
  return null; // Add a return statement for non-array `options`
};

export default TypeButtonAction;
