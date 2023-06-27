import { useState } from 'react';
import { ReactComponent as StarIcon } from 'src/assets/star.svg';

import {
  CheckboxContainer,
  SearchInput,
  StarItem,
  StarsList,
} from './BookFilter.styles';

export const BookFilter = () => {
  const stars = Array(5).fill({ isClicked: false });
  const [selectedRating, setSelectedRating] = useState(0);

  const [filters, setFilters] = useState({
    search: '',
    genres: { fiction: false, adventure: false },
    status: { free: false, busy: false },
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
      <StarsList>
        {stars.map((_, ind) => {
          return (
            <StarItem
              key={ind!}
              filled={ind <= selectedRating}
              onClick={() => setSelectedRating(ind)}
            >
              <StarIcon />
            </StarItem>
          );
        })}
      </StarsList>
    </div>
  );
};
