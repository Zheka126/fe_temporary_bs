import { BookType } from 'src/types/book';

import { instance } from '../instance';

const endPoint = '/books';

export const getBooks = () => instance.get<BookType[]>(endPoint);

export const addNewBook = (book: BookType) =>
  instance.post<BookType>(endPoint, book);

export const getBookById = (id: string) =>
  instance.get<BookType>(`/${endPoint}/${id}`);

export const updateBook = (id: string, book: BookType) =>
  instance.put<BookType>(`/${endPoint}/${id})`, book);

export const deleteBook = (id: string) =>
  instance.delete<BookType>(`/${endPoint}/${id}`);
