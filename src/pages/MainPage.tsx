import { increment } from '../redux/reducers/counterReducer';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { FC } from 'react';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return <div></div>;
};
