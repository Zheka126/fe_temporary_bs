import { BookType } from 'src/types/book';

import { instance } from '../instance';

const endpoint = '/books';

export const getBooks = () => instance.get<BookType[]>(endpoint);

export const addNewBook = (book: BookType) =>
  instance.post<BookType>(endpoint, book);

export const getBookById = (id: string) =>
  instance.get<BookType>(`/${endpoint}/${id}`);

export const updateBook = (id: string, book: BookType) =>
  instance.put<BookType>(`/${endpoint}/${id})`, book);

export const deleteBook = (id: string) =>
  instance.delete<BookType>(`/${endpoint}/${id}`);
