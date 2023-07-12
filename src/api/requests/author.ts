import { AuthorType } from 'src/types/author';

import { instance } from '../instance';

const endpoint = '/authors';

export const getAuthors = () => instance.get<AuthorType[]>(endpoint);

export const getAuthorById = (id: string) =>
  instance.get<AuthorType>(`/${endpoint}/${id}`);

export const addNewAuthor = (author: AuthorType) =>
  instance.post<AuthorType>(endpoint, author);

export const updateAuthor = (author: AuthorType) =>
  instance.put<AuthorType>(`/${endpoint}/${author}`, author);

export const deleteAuthor = (id: string) =>
  instance.delete(`/${endpoint}/${id}`);
