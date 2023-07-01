import { LoginValues } from 'src/types/LoginReq';

import { instance } from './instance';

export const API = {
  login: (values: LoginValues) => {
    return instance.post('/login', values);
  },
};
