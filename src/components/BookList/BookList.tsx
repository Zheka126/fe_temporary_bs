import { BookItem } from "src/types/BookItem";

import { BookListWrapper, StyledBookItem } from "./BookList.styles";

interface BookListProps {
  books: BookItem[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <BookListWrapper>
      {books.map((book) => {
        return (
          <StyledBookItem to="/#" key={book.id}>
            <img src={book.imageSrc} alt="book title" />
            <span>{book.title}</span>
          </StyledBookItem>
        );
      })}
    </BookListWrapper>
  );
};
