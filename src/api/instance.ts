import axios from 'axios';

import { baseURL } from './constants';

export const instance = axios.create({ baseURL });

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.paramsSerializer = { indexes: null };

  return config;
});

// const handleUnauthorized = (error: any, dispatch: any) => {
//   if (error.response.status === 401) {
//     localStorage.removeItem('token')
//     dispatch(setUser(null));
//   }
//   return Promise.reject(error);
// };

// instance.interceptors.response.use(
//   (resp) => resp,
//   (error) => handleUnauthorized(error, useAppDispatch)
// );
