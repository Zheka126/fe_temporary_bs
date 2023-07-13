import { useEffect, useState } from 'react';
import { StatusCodes } from 'src/api/constants';
import { getBooks } from 'src/api/requests/book';

import { BookItem, BookListContainer } from './BookList.styles';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { status, data } = await getBooks();
        if (status === StatusCodes.SUCCESS) {
          setBooks(data);
        }
      } catch (error: any) {
        console.log('Error:', error.message);
      }
    };

    fetchBooks();
  }, []);

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
