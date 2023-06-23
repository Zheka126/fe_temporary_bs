import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

export const BookItem = styled(Link)`
  ${({theme}) => theme.flexStyles()}
  flex-direction: column;
  gap: 10px;
  color: black;
  text-decoration: none;
  padding: 10px;
  width: fit-content;
  img {
    width: 70px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 5px;
  }
`;
