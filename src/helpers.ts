import jwt_decode from 'jwt-decode';

import { UserTokenData } from './types/UserTokenData';

export const getUserTokenData = (token: string) => {
  const {
    unique_name: userName,
    role,
    nameid: userId,
  }: UserTokenData = jwt_decode(token);
  return { userName, role, userId };
};
