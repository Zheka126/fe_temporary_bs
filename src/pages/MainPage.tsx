import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment } from '../redux/reducers/counterReducer';
import Layout from '../components/Layout';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return (
    <div>
      <Layout />
    </div>
  );
}
