import { BookList } from 'src/components/BookList/BookList';
import { Header } from 'src/components/Header/Header';
import { Pagination } from 'src/components/Pagination/Pagination';


export const MainPage = () => {
  return (
    <>
      <Header />
      <BookList />
      <Pagination />
    </>
  );
};
