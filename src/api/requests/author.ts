import { AddAuthorRequest, AuthorType } from 'src/types/author';

import { Endpoints } from '../constants';
import { instance } from '../instance';

export const getAuthors = () => instance.get<AuthorType[]>(Endpoints.AUTHOR);

export const addAuthor = (author: AddAuthorRequest) =>
  instance.post<string>(Endpoints.AUTHOR, author);

export const getAuthorById = (id: string) =>
  instance.get<AuthorType>(`${Endpoints.AUTHOR}/${id}`);

export const addNewAuthor = (author: AddAuthorRequest) =>
  instance.post<string>(Endpoints.AUTHOR, author);

export const updateAuthor = (author: AuthorType) =>
  instance.put<AuthorType>(`${Endpoints.AUTHOR}/${author}`, author);

export const deleteAuthor = (id: string) =>
  instance.delete(`${Endpoints.AUTHOR}/${id}`);
