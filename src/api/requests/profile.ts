import { GetProfileAssignmentsResponse, GetProfileMyBooksResponse, ProfileType } from 'src/types/profile';

import { instance } from '../instance';

const endpoint = '/profile';
type Items = 'books' | 'assignments' | 'wantedbooks';

export const getProfileAssignments = (Page: number) =>
  instance.get<GetProfileAssignmentsResponse>(`${endpoint}/assignments`, {
    params: {
      ...(Page !== 1 ? { Page } : {}),
    },
  });
  
  export const getProfileMyBooks = (Page: number) => {
    return instance.get<GetProfileMyBooksResponse>(
      `${endpoint}/books`,
      {
        params: {
        ...(Page !== 1 ? { Page } : {}),
      }
    }
  );
};

export const updateProfile = (profile: ProfileType) =>
  instance.put<ProfileType>(endpoint, profile);

export const getProfileItems = (data: Items) =>
  instance.get(`${endpoint}/${data}`);
