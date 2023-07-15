import { BookType, FilterValues, GetBooksResponse } from 'src/types/book';

import { instance } from '../instance';

const endpoint = '/books';

export const getBooks = (filters: FilterValues) => {
  const { genre, search, status, selectedRating, currentPage } = filters;

  return instance.get<GetBooksResponse>(endpoint, {
    params: {
      // Pagination.PageSize=
      ...(search.length ? { Genre: search } : {}),
      ...(genre.length ? { Genre: genre } : {}),
      ...(status.length ? { Availability: status } : {}),
      ...(selectedRating ? { Rating: selectedRating } : {}),
      ...(currentPage !== 1 ? { 'Pagination.Page': currentPage } : {}),
    },
    // paramsSerializer: { indexes: null },
  });
};

export const addNewBook = (book: BookType) =>
  instance.post<BookType>(endpoint, book);

export const getBookById = (id: string) =>
  instance.get<BookType>(`/${endpoint}/${id}`);

export const updateBook = (id: string, book: BookType) =>
  instance.put<BookType>(`/${endpoint}/${id})`, book);

export const deleteBook = (id: string) =>
  instance.delete<BookType>(`/${endpoint}/${id}`);
