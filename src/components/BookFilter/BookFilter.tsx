import { useState } from "react";
import { FilterValues } from "src/types/book";
import { GenreType } from "src/types/genre";

import { Loader } from '..';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Rating } from '../Rating/Rating';
import {
  CheckboxContainer,
  GenresContainer,
  GenresLoaderContainer,
  NoGenresOrErr,
  SearchInput
} from "./BookFilter.styles";

interface BookFilterProps {
  genres: GenreType[];
  filters: FilterValues;
  genresErr: string;
  genresLoading: boolean;
  setCheckboxValue: (type: "genre" | "status", key: string) => void;
  setRating: (val: number) => void;
}

export const BookFilter = ({
  genres,
  filters,
  genresErr,
  genresLoading,
  setCheckboxValue,
  setRating,
}: BookFilterProps) => {
  const [searchVal, setSearchVal] = useState("");

  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div>
      <h4>Genres</h4>
      {genresLoading ? (
        <GenresLoaderContainer>
          <Loader size="medium" />
        </GenresLoaderContainer>
      ) : genresErr ? (
        <NoGenresOrErr>{genresErr} 🙁</NoGenresOrErr>
      ) : (
        <>
          <SearchInput
            type="search"
            placeholder="Search"
            value={searchVal}
            disabled={Boolean(filters.genre.length)}
            onChange={({ target }) => setSearchVal(target.value)}
          />
          <GenresContainer>
            {filteredGenres.length ? (
              filteredGenres.map((genre) => {
                return (
                  <CheckboxContainer key={genre.id}>
                    <input
                      type="checkbox"
                      id={genre.name}
                      name={genre.name}
                      value={genre.name}
                      checked={filters.genre.some((g) => g === genre.id)}
                      onChange={() => setCheckboxValue("genre", genre.name)}
                    />
                    <label htmlFor={genre.name}>{genre.name}</label>
                  </CheckboxContainer>
                );
              })
            ) : (
              <NoGenresOrErr>No found genres...</NoGenresOrErr>
            )}
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
