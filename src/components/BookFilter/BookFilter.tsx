import { useReducer } from 'react';

import { Rating } from '../Rating/Rating';
import { CheckboxContainer, SearchInput } from './BookFilter.styles';

const initialState = {
  search: '',
  genre: { fiction: false, adventure: false },
  status: { free: false, busy: false },
  selectedRating: 0,
};

type Action =
  | { type: 'search'; value: string }
  | { type: 'genre'; genre: 'fiction' | 'adventure'; isChecked: boolean }
  | { type: 'status'; status: 'free' | 'busy'; isChecked: boolean }
  | { type: 'rating'; ind: number };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'search':
      return { ...state, search: action.value };

    case 'genre': {
      return {
        ...state,
        genre: { ...state.genre, [action.genre]: action.isChecked },
      };
    }

    case 'status': {
      return {
        ...state,
        status: { ...state.status, [action.status]: action.isChecked },
      };
    }

    case 'rating':
      return { ...state, selectedRating: action.ind };

    default:
      return state;
  }
};

export const BookFilter = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);

  const setSearchValue = (value: string) => {
    dispatch({ type: 'search', value });
  };

  const setCheckboxValue = (
    type: 'genre' | 'status',
    key: 'fiction' | 'adventure' | 'free' | 'busy',
    isChecked: boolean
  ) => {
    if (type === 'genre') {
      dispatch({
        type: 'genre',
        genre: key as 'fiction' | 'adventure',
        isChecked,
      });
    } else if (type === 'status') {
      dispatch({ type: 'status', status: key as 'free' | 'busy', isChecked });
    }
  };

  const setRating = (ind: number) => {
    dispatch({ type: 'rating', ind });
  };

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
            setCheckboxValue('genre', 'fiction', e.target.checked)
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
            setCheckboxValue('genre', 'adventure', e.target.checked)
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
          onChange={(e) => setCheckboxValue('status', 'free', e.target.checked)}
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
          onChange={(e) => setCheckboxValue('status', 'busy', e.target.checked)}
        />
        <label htmlFor="busy">Busy</label>
      </CheckboxContainer>

      <h4>Popularity</h4>
      <Rating
        selectedRating={filters.selectedRating}
        setSelectedRating={(ind) => setRating(ind)}
      />
    </div>
  );
};
