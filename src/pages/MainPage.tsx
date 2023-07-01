import { useState } from 'react';
import { BookFilter } from 'src/components/BookFilter/BookFilter';

import { BookList } from '../components/BookList/BookList';
import {Container} from '../components/common/Container.styles'
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Pagination/Pagination';
import { MainPageContainer } from './styles';

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
