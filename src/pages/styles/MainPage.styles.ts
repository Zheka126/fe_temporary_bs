import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainPageContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const NoBooksText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
`;

export const BooksLoaderContainer = styled.div`
  margin-top: 50px;
`
