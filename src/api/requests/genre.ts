import { GenreType } from 'src/types/genre';

import { instance } from '../instance';

const endpoint = '/genre';

export const getGenres = () => instance.get<GenreType[]>(endpoint);

export const addNewGenre = (genre: GenreType) =>
  instance.post<GenreType>(endpoint, genre);

export const getGenreById = (id: string) =>
  instance.get<GenreType>(`${endpoint}/${id}`);

export const updateGenre = (id: string, genre: GenreType) =>
  instance.put<GenreType>(`${endpoint}/${id})`, genre);

export const deleteGenre = (id: string) =>
  instance.delete(`${endpoint}/${id}`);
