import { useEffect, useReducer, useRef, useState } from 'react';
import { Loader } from 'src/components';
import { BookFilter } from 'src/components/BookFilter/BookFilter';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { getBooksThunk } from 'src/redux/slices/bookSlice';
import { getGenresThunk } from 'src/redux/slices/genresSlice';
import { FilterValues } from 'src/types/book';

import { BookList } from '../components/BookList/BookList';
import { Container } from '../components/common/Container.styles';
import { Pagination } from '../components/Pagination/Pagination';
import {
  BooksLoaderContainer,
  MainPageContainer,
  MainPageContentContainer,
  NoBooksOrServerErrorText,
} from './styles/MainPage.styles';

const initialState = {
  genre: [],
  status: [],
  selectedRating: null,
  currentPage: 1,
};

type Action =
  | { type: "genre"; genre: string }
  | { type: "status"; status: string }
  | { type: "rating"; rating: number | null }
  | { type: "pagination"; page: number };

const reducer = (state: FilterValues, action: Action) => {
  switch (action.type) {

    case 'genre': {
      const selectedGenre = action.genre;
      const updatedGenres = state.genre.includes(selectedGenre)
        ? state.genre.filter((genre) => genre !== selectedGenre)
        : [...state.genre, selectedGenre];

      return {
        ...state,
        genre: updatedGenres
      };
    }

    case 'status': {
      const selectedStatus = action.status;
      const updatedStatus = state.status.includes(selectedStatus)
        ? state.status.filter((status) => status !== selectedStatus)
        : [...state.status, selectedStatus];
      return {
        ...state,
        status: updatedStatus,
      };
    }

    case 'rating':
      return { ...state, selectedRating: action.rating };

    case 'pagination':
      return { ...state, currentPage: action.page };

    default:
      return state;
  }
};

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const [filters, dispatchReducer] = useReducer(reducer, initialState);

  const {
    booksArr: books,
    booksTotalRecords,
    genres
  } = useAppSelector((state) => ({
    booksArr: state.books.books,
    booksTotalRecords: state.books.totalRecords,
    genres: state.genres.genres,
  }));
  const [booksLoading, setBooksLoading] = useState(true);
  const [genresLoading, setGenresLoading] = useState(true);

  const [booksErr, setBooksErr] = useState("");
  const [genresErr, setGenresErr] = useState("");

  const isGenresFetched = useRef(false)

  useEffect(() => {
    (async () => {
      setBooksLoading(true);
      await dispatch(getBooksThunk(filters)).unwrap().catch(err => {
        setBooksErr(err.message);
      });
      setBooksLoading(false);
      
      if(!isGenresFetched.current) {
        await dispatch(getGenresThunk()).unwrap().catch(err => {
          setGenresErr(err.message);
        });
        setGenresLoading(false);
        isGenresFetched.current = true
      }
    })();
  }, [dispatch, filters]);

  const setCheckboxValue = (type: "genre" | "status", key: string) => {
    if (type === "genre") {
      const genreId = genres.find((genre) => genre.name === key)?.id;
      dispatchReducer({
        type: "genre",
        genre: genreId!
      });
    } else if (type === 'status') {
      dispatchReducer({
        type: "status",
        status: key
      });
    }
  };

  const setRating = (rate: number) => {
    const rating = rate === 1 && filters.selectedRating === 1 ? null : rate;
    dispatchReducer({ type: 'rating', rating });
  };

  const setCurrentPage = (page: number) => {
    dispatchReducer({ type: 'pagination', page });
  };

  return (
    <MainPageContainer>
      <Container>
        <MainPageContentContainer>
          {booksLoading ? (
            <BooksLoaderContainer>
              <Loader size="big" />
            </BooksLoaderContainer>
          ) : booksErr ? (
            <NoBooksOrServerErrorText>{booksErr} 🙁</NoBooksOrServerErrorText>
          ) : books.length ? (
            <BookList books={books} />
          ) : (
            <NoBooksOrServerErrorText>No books yet 🙁</NoBooksOrServerErrorText>
          )}
          <BookFilter
            genres={genres}
            filters={filters}
            genresErr={genresErr}
            genresLoading={genresLoading}
            setCheckboxValue={setCheckboxValue}
            setRating={setRating}
          />
        </MainPageContentContainer>
      </Container>
      <Pagination
        pageCount={Math.ceil(booksTotalRecords / 12)}
        currentPage={filters.currentPage}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
    </MainPageContainer>
  );
};
