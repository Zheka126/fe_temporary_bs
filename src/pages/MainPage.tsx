import { BookList } from '../components/BookList/BookList';
import { Pagination } from '../components/Pagination/Pagination';
import { Container } from '../styles';

export const MainPage = () => {
  return (
    <Container>
      <BookList />
      <Pagination />
    </Container>
  );
};
