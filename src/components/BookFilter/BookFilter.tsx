import { FilterValues } from "src/types/FilterValues";

import { Rating } from "../Rating/Rating";
import { CheckboxContainer, SearchInput } from "./BookFilter.styles";

interface BookFilterProps {
  filters: FilterValues;
  setSearchValue: (val: string) => void;
  setCheckboxValue: (
    type: "genre" | "status",
    key: "fiction" | "adventure" | "free" | "busy",
    isChecked: boolean
  ) => void;
  setRating: (val: number) => void;
}

export const BookFilter = ({
  filters,
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
        value={filters.search}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <CheckboxContainer>
        <input
          type="checkbox"
          id="fiction"
          name="fiction"
          value="fiction"
          checked={filters.genre.fiction}
          onChange={(e) =>
            setCheckboxValue("genre", "fiction", e.target.checked)
          }
        />
        <label htmlFor="fiction">Fiction</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="adventure"
          name="adventure"
          value="adventure"
          checked={filters.genre.adventure}
          onChange={(e) =>
            setCheckboxValue("genre", "adventure", e.target.checked)
          }
        />
        <label htmlFor="adventure">Adventure</label>
      </CheckboxContainer>

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
        selectedRating={filters.selectedRating - 1}
        setSelectedRating={(ind) => setRating(ind + 1)}
      />
    </div>
  );
};
