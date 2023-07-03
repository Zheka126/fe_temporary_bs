import { BookFilter } from 'src/components/BookFilter/BookFilter';

import { BookList } from '../components/BookList/BookList';
import {Container} from '../components/common/Container.styles'
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Pagination/Pagination';
import { MainPageContainer, MainPageContentContainer } from './styles/MainPage.styles';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Container>
        <MainPageContentContainer>
          <BookList />
          <BookFilter />
        </MainPageContentContainer>
      </Container>
      <Pagination />
    </MainPageContainer>
  );
};
