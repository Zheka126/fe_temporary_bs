import axios from 'axios';

import { baseURL } from './constants';

export const instance = axios.create({ baseURL });

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.paramsSerializer = { indexes: null };

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href="#/login";  
    }
    return Promise.reject(error);
  }
);