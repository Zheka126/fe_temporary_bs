import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment } from '../redux/reducers/counterReducer';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return <div />;
};
