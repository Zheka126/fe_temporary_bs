import { ProfileType } from 'src/types/profile';

import { instance } from '../instance';

const endPoint = '/profile';
type Items = 'books' | 'assignments';

export const getCurrentProfile = () => instance.get<ProfileType>(endPoint);

export const updateProfile = (profile: ProfileType) =>
  instance.put<ProfileType>(endPoint, profile);

export const getProfileItems = (data: Items) =>
  instance.get<string[]>(`/${endPoint}/${data}`);
