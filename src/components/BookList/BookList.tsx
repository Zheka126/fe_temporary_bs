import { baseURL } from "src/api/constants";
import { BookType } from "src/types/book";

import { BookListContainer, StyledBookItem } from "./BookList.styles";

interface BookListProps {
  books: BookType[];
}

export const BookList = ({ books }: BookListProps) => {
  // console.log(`${baseURL}/${books[0].imageSrc}`);

  return (
    <BookListContainer data-testid="book-list-container">
      {books.map((book) => {
        return (
          <StyledBookItem
            to="/#"
            key={book.id}
            data-testid={`book-item-${book.id}`}
          >
            <img
              src={`${baseURL}/${book.imageSrc}`}
              alt="book title"
              data-testid={`book-image-${book.id}`}
            />
            <span data-testid={`book-title-${book.id}`}>{book.title}</span>
          </StyledBookItem>
        );
      })}
    </BookListContainer>
  );
};
