import { useState } from 'react';

import { Rating } from '../Rating/Rating';
import { CheckboxContainer, SearchInput } from './BookFilter.styles';

export const BookFilter = () => {
  const [filters, setFilters] = useState({
    search: '',
    genres: { fiction: false, adventure: false },
    status: { free: false, busy: false },
    selectedRating: 0,
  });

  return (
    <div>
      <h4>Genres</h4>
      <SearchInput
        type="search"
        placeholder="Search"
        value={filters.search}
        onChange={(e) => {}}
      />
      <CheckboxContainer>
        <input
          type="checkbox"
          id="fiction"
          name="fiction"
          value="fiction"
          checked={filters.genres.fiction}
          onChange={(e) => {}}
        />
        <label htmlFor="fiction">Fiction</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          id="adventure"
          name="adventure"
          value="adventure"
          checked={filters.genres.adventure}
          onChange={(e) => {}}
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
          onChange={(e) => {}}
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
          onChange={(e) => {}}
        />
        <label htmlFor="busy">Busy</label>
      </CheckboxContainer>

      <h4>Popularity</h4>
      <Rating
        selectedRating={filters.selectedRating}
        setSelectedRating={(ind) =>
          setFilters({ ...filters, selectedRating: ind })
        }
      />
    </div>
  );
};
