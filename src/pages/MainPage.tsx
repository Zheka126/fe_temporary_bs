import { BookFilter } from 'src/components/BookFilter/BookFilter';
import { BookList } from 'src/components/BookList/BookList';
import { Container } from 'src/styles';

import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <Container>
      <MainPageContainer>
        <BookList />
        <BookFilter />
      </MainPageContainer>
    </Container>
  );
};
