import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment } from '../redux/reducers/counterReducer';
import { Header } from '../components/Header/Header';

export default function MainPage() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Header />
    </div>
  );
}
