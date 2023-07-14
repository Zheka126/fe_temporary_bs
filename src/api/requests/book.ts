import { BookDetailsType, BookType, FilterValues, GetBooksResponse } from 'src/types/book';

import { instance } from '../instance';

const endpoint = '/books';

export const getBooks = (filters: FilterValues) => {
  const { status, selectedRating, currentPage } = filters;
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

export const getBookById = (id: string | undefined) =>
  instance.get<BookDetailsType>(`${endpoint}/${id}`);

export const updateBook = (id: string | undefined, book: BookDetailsType | undefined) =>
  instance.put<BookDetailsType>(`${endpoint}/${id})`, book);

export const deleteBook = (id: string | undefined) =>
  instance.delete(`${endpoint}/${id}`);
