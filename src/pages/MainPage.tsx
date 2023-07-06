import { useState } from 'react';
import { BookList } from 'src/components/BookList/BookList';
import { Header } from 'src/components/Header/Header';
import { Pagination } from 'src/components/Pagination/Pagination';

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <>
      <Header />
      <BookList />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};
