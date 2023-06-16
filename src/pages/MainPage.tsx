<<<<<<< HEAD
import { increment } from '../redux/reducers/counterReducer';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { FC } from 'react';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return <div></div>;
};
=======
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment } from '../redux/reducers/counterReducer';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function MainPage() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return (
    <div>
      <Title>SAY MY NAME</Title>
      <img
        src="https://i1.sndcdn.com/artworks-000173392556-ppnbfq-t500x500.jpg"
        alt=""
      />
      <button type="button" onClick={() => dispatch(increment())}>
        HEISENBERG!!!
        {count}
      </button>
    </div>
  );
}
>>>>>>> 5e83d271137c7dd2a4e46027c9386784db3f74eb
