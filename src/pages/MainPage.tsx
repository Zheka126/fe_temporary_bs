import { BookFilter } from 'src/components/BookFilter/BookFilter';
import { BookList } from 'src/components/BookList/BookList';

import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <BookList />
      <BookFilter />
    </MainPageContainer>
  );
};
