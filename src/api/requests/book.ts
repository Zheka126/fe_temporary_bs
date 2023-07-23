import {
  AddBookRequest,
  BookDetailsType,
  BookDetailsUpdateRequest,
  FilterValues,
  GetBooksResponse,
} from 'src/types/book';
import { AddReviewRequest } from 'src/types/review';

import { instance } from '../instance';

const endpoint = '/books';

const multipartHeader = {
  'Content-Type': 'multipart/form-data',
};

export const getBooks = (filters: FilterValues) => {
  const { genre, status, selectedRating, currentPage } = filters;

  return instance.get<GetBooksResponse>(endpoint, {
    params: {
      x: undefined,
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
    headers: multipartHeader,
  });
};

export const getBookById = (id: string | undefined) =>
  instance.get<BookDetailsType>(`${endpoint}/${id}`);

export const updateBook = (book: BookDetailsUpdateRequest) =>
  instance.put<BookDetailsUpdateRequest>(endpoint, book, {
    headers: multipartHeader,
  });

export const assignBookToCurrentUser = (id: string | undefined) =>
  instance.get(`${endpoint}/${id})/assign`);

export const getBookReviews = (id: string | undefined) =>
  instance.get(`${endpoint}/${id}/reviews`);
// should be like this but there are other fields...
// instance.get<ReviewType[]>(`${endpoint}/${id}/reviews`);

export const addBookReview = (review: AddReviewRequest) =>
  instance.post(`${endpoint}/reviews/add`, review);

export const deleteBook = (id: string | undefined) =>
  instance.delete(`${endpoint}/${id}`);
