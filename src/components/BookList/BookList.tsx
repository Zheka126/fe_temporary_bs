import { useEffect, useState } from 'react';
import { StatusCodes } from 'src/api/constants';
import { getBooks } from 'src/api/requests/book';
import { BookType } from 'src/types/book';

import { BookListContainer } from './BookList.styles';

interface BookListProps {
  books: BookType[];
}

export const BookList = ({ books }: BookListProps) => {

  useEffect(() => {
  const {status, data } = await getBooks()
    
    }
  }, [third])
  

  return (
    <BookListContainer data-testid="book-list-container">
      {books.map(({ id, img, title }) => {
        return (
          <BookItem
            to={`/books/${id}`}
            key={id}
            data-testid={`book-item-${id}`}
          >
            <img src={img} alt="book title" data-testid={`book-image-${id}`} />
            <span data-testid={`book-title-${id}`}>{title}</span>
          </BookItem>
        );
      })}
    </BookListContainer>
  );
};
