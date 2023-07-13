import { FilterValues } from "src/types/FilterValues";

import { Rating } from "../Rating/Rating";
import { CheckboxContainer, GenresContainer, SearchInput } from "./BookFilter.styles";

interface BookFilterProps {
  filters: FilterValues;
  searchTerm: string;
  setSearchValue: (val: string) => void;
  setCheckboxValue: (
    type: "genre" | "status",
    key: string,
    isChecked: boolean
  ) => void;
  setRating: (val: number) => void;
}

const genres = [
  { id: 1, key: 'fiction', value: 'Fiction' },
  { id: 2, key: 'adventure', value: 'Adventure' },
  { id: 3, key: 'horror', value: 'Horror' },
  { id: 4, key: 'historical', value: 'Historical' },
  { id: 5, key: 'romance', value: 'Romance' },
  { id: 6, key: 'western', value: 'Western' },
  { id: 7, key: 'mystery', value: 'Mystery' },
  { id: 8, key: 'science_fiction', value: 'Science fiction' },
  { id: 9, key: 'fantasy', value: 'Fantasy' },
  { id: 10, key: 'dystopian', value: 'Dystopian' }
]

export const BookFilter = ({
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
        {genres.map((genre) => {
          return (
            <CheckboxContainer key={genre.id}>
              <input
                type="checkbox"
                id={genre.value}
                name={genre.value}
                value={genre.value}
                checked={filters.genre[genre.key]}
                onChange={(e) =>
                  setCheckboxValue("genre", genre.key, e.target.checked)
                }
              />
              <label htmlFor={genre.value}>{genre.value}</label>
            </CheckboxContainer>
          );
        })}
      </GenresContainer>
      <h4>Status</h4>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="free"
          name="free"
          value="free"
          checked={filters.status.free}
          onChange={(e) => setCheckboxValue("status", "free", e.target.checked)}
        />
        <label htmlFor="free">Free</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="busy"
          name="busy"
          value="busy"
          checked={filters.status.busy}
          onChange={(e) => setCheckboxValue("status", "busy", e.target.checked)}
        />
        <label htmlFor="busy">Busy</label>
      </CheckboxContainer>

      <h4>Popularity</h4>
      <Rating
        selectedRating={filters.selectedRating}
        setSelectedRating={(ind) => setRating(ind + 1)}
      />
    </div>
  );
};
