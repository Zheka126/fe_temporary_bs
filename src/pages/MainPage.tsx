import { BookFilter } from '../components/BookFilter/BookFilter';
import { BookList } from '../components/BookList/BookList';
import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <BookList />
      <BookFilter />
    </MainPageContainer>
  );
};
