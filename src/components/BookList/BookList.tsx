import { useEffect, useState } from 'react';

import { BookItem, BookListContainer } from './BookList.styles';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/books/');
        console.log('response: ', response);
        if (response.ok) {
          const booksData = await response.json();
          setBooks(booksData);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error: any) {
        console.log('Error:', error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BookListContainer>
      {books.map(({ id, img, title }) => {
        return (
          <BookItem to={`/book_details/${id}`} key={id}>
            <img src={img} alt="book title" />
            <span>{title}</span>
          </BookItem>
        );
      })}
    </BookListContainer>
  );
};
