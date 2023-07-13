
import { BookItem } from 'src/types/BookItem';

import { BookListContainer,StyledBookItem } from "./BookList.styles";

interface BookListProps {
  books: BookItem[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <BookListContainer data-testid="book-list-container">
      {books.map((book) => {
        return (
          <StyledBookItem to="/#" key={book.id} data-testid={`book-item-${book.id}`}>
            <img src={book.imageSrc} alt="book title" data-testid={`book-image-${book.id}`} />
            <span data-testid={`book-title-${book.id}`}>{book.title}</span>
          </StyledBookItem>
        );
      })}
    </BookListContainer>
  );
};
