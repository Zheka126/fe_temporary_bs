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
    const selectedGenres = Object.keys(genre).filter((key) => genre[key]);
    const selectedstatus = Object.keys(status).filter((key) => status[key]);

    return axios.get<BookItem[]>(`http://localhost:3000/books`, {
      params: {
        _limit: 12,
        _page: currentPage,
        ...(search ? { title: search } : {}),
        ...(selectedGenres ? { genres: selectedGenres } : {}),
        ...(selectedstatus ? { availability: selectedstatus } : {}),
        ...(selectedRating ? { rating: selectedRating } : {}),
      },
      paramsSerializer: { indexes: null },
    });
  },
};
