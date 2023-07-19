import jwt_decode from 'jwt-decode';

import { AuthorType } from './types/author';
import { AvailabilityStatus, Language } from './types/book';
import { GenreType } from './types/genre';
import { OptionType } from './types/option';
import { UserTokenData } from './types/user';

export const getUserTokenData = (token: string) => {
  const {
    unique_name: userName,
    role,
    nameid: userId,
  }: UserTokenData = jwt_decode(token);
  return { userName, role, userId };
};

export const getTotalPages = (totalItems: number, itemsPerPage: number) => {
  return Math.ceil(totalItems / itemsPerPage);
};

export const getAuthorFullName = (author: AuthorType) =>
  `${author.firstName} ${author.lastName}`;

export const getAuthorOptions = (authors: AuthorType[]) =>
  authors.map((author) => ({
    id: author.id,
    value: author.id,
    label: getAuthorFullName(author),
  }));

// can we use enum like this?
export const availabilityOptions: OptionType[] = Object.values(
  AvailabilityStatus
).map((status, index) => ({
  id: index,
  value: status,
  label: status,
}));
export const languageOptions: OptionType[] = Object.values(Language).map(
  (language, index) => ({
    id: index,
    value: language,
    label: language,
  })
);

export const getGenresOptions = (genres: GenreType[]) =>
  genres.map(({ id, name }) => ({ id, label: name, value: id }));
