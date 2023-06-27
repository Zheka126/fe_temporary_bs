import { BookList } from '../components/BookList/BookList';
import { Pagination } from '../components/Pagination/Pagination';

export const MainPage = () => {
  return (
    <div>
      <BookList />
      <Pagination />
    </div>
  );
};
