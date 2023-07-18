import { AddAuthorRequest, AuthorType } from 'src/types/author';

import { instance } from '../instance';

const endpoint = '/author';

export const getAuthors = () => instance.get<AuthorType[]>(endpoint);

export const addAuthor = (author: AddAuthorRequest) =>
  instance.post<string>(endpoint, author);

export const getAuthorById = (id: string) =>
  instance.get<AuthorType>(`/${endpoint}/${id}`);

export const updateAuthor = (author: AuthorType) =>
  instance.put<AuthorType>(`/${endpoint}/${author}`, author);

export const deleteAuthor = (id: string) =>
  instance.delete(`/${endpoint}/${id}`);
