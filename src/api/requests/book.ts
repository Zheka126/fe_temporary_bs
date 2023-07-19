import {
  AddBookRequest,
  BookDetailsType,
  BookDetailsUpdateRequest,
  FilterValues,
  GetBooksResponse,
} from 'src/types/book';

import { Endpoints } from '../constants';
import { instance } from '../instance';

const muptipartHeaders = {
  'Content-Type': 'multipart/form-data',
};

export const getBooks = (filters: FilterValues) => {
  const { genre, status, selectedRating, currentPage } = filters;

  return instance.get<GetBooksResponse>(Endpoints.BOOKS, {
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
  return instance.post<string>(Endpoints.BOOKS, book, {
    headers: muptipartHeaders,
  });
};

export const getBookById = (id: string | undefined) =>
  instance.get<BookDetailsType>(`${Endpoints.BOOKS}/${id}`);

export const updateBook = (book: BookDetailsUpdateRequest) =>
  instance.put<BookDetailsUpdateRequest>(Endpoints.BOOKS, book, {
    headers: muptipartHeaders,
  });

export const assignBookToCurrentUser = (id: string | undefined) =>
  instance.get(`${Endpoints.BOOKS}/${id})/assign`);

export const deleteBook = (id: string | undefined) =>
  instance.delete(`${Endpoints.BOOKS}/${id}`);
