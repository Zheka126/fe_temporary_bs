import { WantedBook, WantedBookUpdateRequest } from 'src/types/book';
import { ProfileType } from 'src/types/profile';

import { Endpoints } from '../constants';
import { instance } from '../instance';

const wantedBooksURL = `${Endpoints.PROFILE}/wantedbooks`;

export const getCurrentProfile = () =>
  instance.get<ProfileType>(Endpoints.PROFILE);

export const updateProfile = (profile: ProfileType) =>
  instance.put<ProfileType>(Endpoints.PROFILE, profile);

export const getProfileItems = (
  items: 'books' | 'assignments' | 'wantedbooks'
) => instance.get(`${Endpoints.PROFILE}/${items}`);

export const addWantedBook = (wantedBook: WantedBook) =>
  instance.post(wantedBooksURL, wantedBook);

export const updateWantedBook = (updatedWantedBook: WantedBookUpdateRequest) =>
  instance.put(wantedBooksURL, updatedWantedBook);

export const deleteWantedBook = (id: string) =>
  instance.delete(`${wantedBooksURL}/${id}`);
