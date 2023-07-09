import { useState } from 'react';
import { BookList } from 'src/components/BookList/BookList';
import { Header } from 'src/components/Header/Header';
import { Pagination } from 'src/components/Pagination/Pagination';
import { getTotalPages } from 'src/utils';

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = getTotalPages(20, 12)

  return (
    <>
      <Header />
      <BookList />
      <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};
