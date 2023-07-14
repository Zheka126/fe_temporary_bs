import { FilterValues } from "src/types/book";
import { GenreType } from "src/types/genre";

import { Rating } from "../Rating/Rating";
import {
  CheckboxContainer,
  GenresContainer,
  SearchInput
} from "./BookFilter.styles";

interface BookFilterProps {
  genresList: GenreType[];
  filters: FilterValues;
  searchTerm: string;
  setSearchValue: (val: string) => void;
  setCheckboxValue: (
    type: "genre" | "status",
    key: string,
  ) => void;
  setRating: (val: number) => void;
}

// const genres = [
//   { id: 1, key: "fiction", value: "Fiction" },
//   { id: 2, key: "adventure", value: "Adventure" },
//   { id: 3, key: "horror", value: "Horror" },
//   { id: 4, key: "historical", value: "Historical" },
//   { id: 5, key: "romance", value: "Romance" },
//   { id: 6, key: "western", value: "Western" },
//   { id: 7, key: "mystery", value: "Mystery" },
//   { id: 8, key: "science_fiction", value: "Science fiction" },
//   { id: 9, key: "fantasy", value: "Fantasy" },
//   { id: 10, key: "dystopian", value: "Dystopian" }
// ];

export const BookFilter = ({
  genresList,
  filters,
  searchTerm,
  setSearchValue,
  setCheckboxValue,
  setRating
}: BookFilterProps) => {
  return (
    <div>
      <h4>Genres</h4>
      <SearchInput
        type="search"
        placeholder="Search"
        value={searchTerm}
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
                checked={filters.genre.some(g => g === genre.id)}
                onChange={() => setCheckboxValue("genre", genre.name)}
              />
              <label htmlFor={genre.name}>{genre.name}</label>
            </CheckboxContainer>
          );
        })}
      </GenresContainer>
      <h4>Status</h4>
      {
        ['Free', 'Busy'].map(status => {
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

          )
        })
      }
      <h4>Popularity</h4>
      <Rating
        selectedRating={filters.selectedRating}
        setSelectedRating={(ind) => setRating(ind + 1)}
      />
    </div>
  );
};
