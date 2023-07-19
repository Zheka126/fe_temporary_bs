import axios from 'axios';
import { setUser } from 'src/redux/slices/authSlice';
import { store } from 'src/redux/store';

import { baseURL } from './constants';

export const instance = axios.create({ baseURL });

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.paramsSerializer = { indexes: null };

  return config;
});

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('token');
//       // store.dispatch(setUser(null));

//       // Redirect the user to the login page
//       // Assuming you have a function to handle navigation or you are using a router
//       // Replace 'login' with the path to your login page
//       // e.g., navigateToLoginPage() or router.push('/login')
//       // yourNavigationFunction('login');
//     }
//     return Promise.reject(error);
//   }
// );

const simulate401Error = () => {
  const errorData = {
    status: 401,
    data: { message: 'Unauthorized' },
    config: {},
    request: {}
  };

  return Promise.reject(errorData);
};

// Example usage to simulate a 401 error
simulate401Error()
  .catch((error) => {
    // The interceptor will trigger here, and you can handle the 401 error
    console.error('Error:', error);
  });