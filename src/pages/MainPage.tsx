import { BookList } from '../components/BookList/BookList';
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Pagination/Pagination';

export const MainPage = () => {
  return (
    <>
      <Header />
      <BookList />
      <Pagination />
    </>
  );
};
