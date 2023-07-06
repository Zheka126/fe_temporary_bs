import axios from 'axios';

import { baseURL } from './baseURL';

export const instance = axios.create({ baseURL });

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  // config.paramsSerializer = { indexes: null };

  return config;
});
