import { FilterValues } from "src/types/book";
import { GenreType } from "src/types/genre";

import { Loader } from "..";
import { Rating } from "../Rating/Rating";
import {
  CheckboxContainer,
  GenresContainer,
  GenresErr,
  GenresLoaderContainer,
  SearchInput
} from "./BookFilter.styles";

interface BookFilterProps {
  genresList: GenreType[];
  filters: FilterValues;
  searchTerm: string;
  genresErr: string;
  genresLoading: boolean;
  setSearchValue: (val: string) => void;
  setCheckboxValue: (type: "genre" | "status", key: string) => void;
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
  setRating
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
            {genresList.map((genre) => {
              return (
                <CheckboxContainer key={genre.id}>
                  <input
                    type="checkbox"
                    id={genre.name}
                    name={genre.name}
                    value={genre.name}
                    checked={filters.genre.some((g) => g === genre.id)}
                    disabled={Boolean(searchTerm)}
                    onChange={() => setCheckboxValue("genre", genre.name)}
                  />
                  <label htmlFor={genre.name}>{genre.name}</label>
                </CheckboxContainer>
              );
            })}
          </GenresContainer>
        </>
      )}
      <h4>Status</h4>
      {["Free", "Busy"].map((status) => {
        return (
          <CheckboxContainer key={status}>
            <input
              type="checkbox"
              id={status}
              name={status}
              value={status}
              checked={filters.status.includes(status)}
              onChange={() => setCheckboxValue("status", status)}
            />
            <label htmlFor={status}>{status}</label>
          </CheckboxContainer>
        );
      })}
      <h4>Popularity</h4>
      <Rating
        selectedRating={filters.selectedRating}
        setSelectedRating={(ind) => setRating(ind + 1)}
      />
    </div>
  );
};
