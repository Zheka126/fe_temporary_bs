import { BookFilter } from 'src/components/BookFilter/BookFilter';
import { BookList } from '../components/BookList/BookList';
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Pagination/Pagination';
import {Container} from '../components/common/Container.styles'
import { MainPageContainer } from './styles';
import { useState } from 'react';

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  
  return (
    <>
      <Header />
      <Container>
        <MainPageContainer>
          <BookList />
          <BookFilter />
        </MainPageContainer>
      </Container>
      <Pagination currentPage={currentPage} setCurrentPage={(page) => setCurrentPage(page)}/>
    </>
  );
};
