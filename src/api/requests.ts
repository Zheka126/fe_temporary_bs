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
  getBooks: ({ search }: FilterValues) => {
    return axios.get<BookItem[]>(`http://localhost:3000/books`, {
      params: {
        ...(search ? { title: search } : {}),
      },
    });
  },
};
