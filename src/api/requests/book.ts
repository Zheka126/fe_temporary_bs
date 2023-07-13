import { BookType, FilterValues, GetBooksResponse } from 'src/types/book';

import { instance } from '../instance';

const endpoint = '/books';

export const getBooks = (filters: FilterValues) => {
  const { search, genre, status, selectedRating, currentPage } = filters;
  // const selectedGenres = Object.keys(genre).filter((key) => genre[key]);
  const Availability = Object.keys(status).filter((key) => status[key]);

  return instance.get<GetBooksResponse>(endpoint, {
    params: {
      // Pagination.PageSize=
      ...(currentPage !== 1 ? { 'Pagination.Page': currentPage } : {}),
      ...(status ? { Availability } : {}),
      ...(selectedRating ? { Rating: selectedRating } : {}),
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
