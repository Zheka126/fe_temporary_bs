import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileMyBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 34px);
`;

export const MyBooksContentContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  column-gap: 50px;
`;

export const MyBooksList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 20px;
  max-height: 450px;
  overflow: auto;
  ${({ theme }) => theme.styledScrollbar};
`;

export const MyBooksItem = styled(Link)`
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

export const UploadBookButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`;
