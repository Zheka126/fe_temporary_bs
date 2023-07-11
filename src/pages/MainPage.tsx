import { useState } from 'react';
import { BookList, Header, Pagination } from 'src/components';
import { getTotalPages } from 'src/utils';

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = getTotalPages(20, 12);

  return (
    <>
      <Header />
      <BookList />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
