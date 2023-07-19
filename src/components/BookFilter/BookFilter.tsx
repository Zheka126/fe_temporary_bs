import { FilterValues } from 'src/types/book';
import { GenreType } from 'src/types/genre';

import { Loader } from '..';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Rating } from '../Rating/Rating';
import {
  GenresContainer,
  GenresErr,
  GenresLoaderContainer,
  SearchInput,
} from './BookFilter.styles';

interface BookFilterProps {
  genresList: GenreType[];
  filters: FilterValues;
  searchTerm: string;
  genresErr: string;
  genresLoading: boolean;
  setSearchValue: (val: string) => void;
  setCheckboxValue: (type: 'genre' | 'status', key: string) => void;
  setRating: (val: number) => void;
}

export const BookFilter = ({
  genresList,
  filters,
  searchTerm,
  genresErr,
  genresLoading,
  setSearchValue,
  setCheckboxValue,
  setRating,
}: BookFilterProps) => {
  return (
    <div>
      <h4>Genres</h4>
      {genresLoading ? (
        <GenresLoaderContainer>
          <Loader size="medium" />
        </GenresLoaderContainer>
      ) : genresErr ? (
        <GenresErr>{genresErr} 🙁</GenresErr>
      ) : (
        <>
          <SearchInput
            type="search"
            placeholder="Search"
            value={searchTerm}
            disabled={Boolean(filters.genre.length)}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <GenresContainer>
            {genresList.map((genre) => (
              <Checkbox
                key={genre.id}
                id={genre.name}
                name={genre.name}
                value={genre.name}
                checked={filters.genre.some((g) => g === genre.id)}
                disabled={Boolean(searchTerm)}
                onChange={() => setCheckboxValue('genre', genre.name)}
              />
            ))}
          </GenresContainer>
        </>
      )}
      <h4>Status</h4>
      {['Free', 'Busy'].map((status) => (
        <Checkbox
          key={status}
          id={status}
          name={status}
          value={status}
          checked={filters.status.includes(status)}
          onChange={() => setCheckboxValue('status', status)}
        />
      ))}
      <h4>Popularity</h4>
      <Rating
        selectedRating={filters.selectedRating}
        setSelectedRating={(i) => setRating(i + 1)}
      />
    </div>
  );
};
