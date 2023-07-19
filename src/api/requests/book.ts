import { AddBookRequest, BookDetailsType, FilterValues, GetBooksResponse } from 'src/types/book';

import { instance } from '../instance';

const endpoint = '/books';

export const getBooks = (filters: FilterValues) => {
  const { genre, status, selectedRating, currentPage } = filters;

  return instance.get<GetBooksResponse>(endpoint, {
    params: {
      // Pagination.PageSize=
      ...(genre.length ? { Genre: genre } : {}),
      ...(status.length ? { Availability: status } : {}),
      ...(selectedRating ? { Rating: selectedRating } : {}),
      ...(currentPage !== 1 ? { 'Pagination.Page': currentPage } : {}),
    },
    // paramsSerializer: { indexes: null },
  });
};

export const addBook = (book: AddBookRequest) => {
  return instance.post<string>(endpoint, book, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }); 
}

export const getBookById = (id: string | undefined) =>
  instance.get<BookDetailsType>(`${endpoint}/${id}`);

export const updateBook = (id: string | undefined, book: BookDetailsType | undefined) =>
  instance.put<BookDetailsType>(`${endpoint}/${id})`, book);

export const deleteBook = (id: string | undefined) =>
  instance.delete(`${endpoint}/${id}`);
