import { BookItem, BookListContainer } from './BookList.styles';

const books = [
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'This is a book',
  },
];

export const BookList = () => {
  return (
    <BookListContainer>
      {books.map((book, ind) => {
        return (
          <BookItem to="/#" key={ind}>
            <img src={book.img} alt="book title" />
            <span>{book.title}</span>
          </BookItem>
        );
      })}
    </BookListContainer>
  );
};
