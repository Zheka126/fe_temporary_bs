import styled from 'styled-components';
import { increment } from '../redux/reducers/counterReducer';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return <div></div>;
}
