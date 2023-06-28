import { BookItem, BookListContainer } from './BookList.styles';

const books = [
  {
    id: 1,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 2,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 3,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 4,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 5,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 6,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 7,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 8,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 9,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 10,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 11,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    id: 12,
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
];

export const BookList = () => {
  return (
    <BookListContainer>
      {books.map((book) => {
        return (
          <BookItem to="/book_details" key={book.id}>
            <img src={book.img} alt="book title" />
            <span>{book.title}</span>
          </BookItem>
        );
      })}
    </BookListContainer>
  );
};
