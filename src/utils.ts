import jwt_decode from 'jwt-decode';

import { UserTokenData } from './types/user';

export const getUserTokenData = (token: string) => {
  const {
    unique_name: userName,
    role,
    nameId: userId,
  }: UserTokenData = jwt_decode(token);
  return { userName, role, userId };
};

export const getTotalPages = (totalItems: number, itemsPerPage: number) => {
  return Math.ceil(totalItems / itemsPerPage);
};
