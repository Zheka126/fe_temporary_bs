import { BookFilter } from 'src/components/BookFilter/BookFilter';
import { BookList } from '../components/BookList/BookList';
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Pagination/Pagination';
import {Container} from '../components/common/Container.styles'
import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <MainPageContainer>
          <BookList />
          <BookFilter />
        </MainPageContainer>
      </Container>
      <Pagination />
    </>
  );
};
