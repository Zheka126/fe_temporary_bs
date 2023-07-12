import { ProfileType } from 'src/types/profile';

import { instance } from '../instance';

const endpoint = '/profile';
type Items = 'books' | 'assignments';

export const getCurrentProfile = () => instance.get<ProfileType>(endpoint);

export const updateProfile = (profile: ProfileType) =>
  instance.put<ProfileType>(endpoint, profile);

export const getProfileItems = (data: Items) =>
  instance.get<string[]>(`/${endpoint}/${data}`);
