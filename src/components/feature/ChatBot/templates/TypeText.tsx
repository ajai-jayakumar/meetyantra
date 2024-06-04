import { IResponseDetails } from '@/types/api';

const TypeText = ({ children }: { children: IResponseDetails }) => {
  return <div>{children.response}</div>;
};

export default TypeText;
