import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
`;

export const MainPageContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const BooksLoaderContainer = styled.div`
margin-top: 50px;
`
export const NoBooksOrServerErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
`;
