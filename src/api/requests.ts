import { LoginDTO, UserRegistrationDTO } from 'src/types/user';

import { instance } from './instance';

export const login = (values: LoginDTO) =>
  instance.post<string>('/login', values);

export const register = (values: UserRegistrationDTO) =>
  instance.post<string>('/register', values);
