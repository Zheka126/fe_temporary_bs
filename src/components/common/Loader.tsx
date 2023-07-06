import ReactLoading from 'react-loading';
import { LoaderProps } from 'src/types/general';

// how to take color from themes.ts to make it like default value
export const Loader = ({ type, color = '#000' }: LoaderProps) => {
  return <ReactLoading type={type} color={color} height="10%" width="10%" />;
};
