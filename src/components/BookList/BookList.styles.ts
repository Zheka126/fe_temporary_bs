import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 20px;
`;

export const StyledBookItem = styled(Link)`
  ${({ theme }) => theme.flexStyles('start', 'center')};
  flex-direction: column;
  gap: 10px;
  color: black;
  text-decoration: none;
  padding: 10px;
  height: fit-content;
  img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 5px;
  }
`;
