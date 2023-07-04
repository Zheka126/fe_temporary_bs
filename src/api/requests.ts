import axios from 'axios';
import { BookItem } from 'src/types/BookItem';
import { LoginValues } from 'src/types/LoginReq';

import { instance } from './instance';

export const API = {
  login: (values: LoginValues) => {
    return instance.post<string>('/login', values);
  },

  // MOCK REQUEST
  getBooks: () => {
    return axios.get<BookItem[]>('http://localhost:3000/books');
  },
};
