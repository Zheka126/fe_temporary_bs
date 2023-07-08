import axios from 'axios';
import { BookItem } from 'src/types/BookItem';
import { FilterValues } from 'src/types/FilterValues';
import { LoginValues } from 'src/types/LoginReq';

import { instance } from './instance';

export const API = {
  login: (values: LoginValues) => {
    return instance.post<string>('/login', values);
  },

  // MOCK REQUEST
  getBooks: (filters: FilterValues) => {
    const { search, genre, status, selectedRating, currentPage } = filters;
    // const selectedGenres = Object.keys(genre).filter((key) => genre[key]);
    const Availability = Object.keys(status).filter((key) => status[key]);

    return instance.get<BookItem[]>('/books', {
      params: {
        // Pagination.PageSize=
        ...(currentPage !== 1 ? { 'Pagination.Page': currentPage } : {}),
        ...(status ? { Availability } : {}),
        ...(selectedRating ? { Rating: selectedRating } : {}),
      },
      paramsSerializer: { indexes: null },
    });
  },
};
