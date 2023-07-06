import { UserCredentials, UserRegistrationData } from 'src/types/user';

import { instance } from './instance';

export const API = {
  login: (values: UserCredentials) => instance.post<string>('/login', values),
  register: (values: UserRegistrationData) => instance.post<string>('/register', values),
//   where to catch exceptions and errors
};
