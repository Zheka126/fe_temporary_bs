import debounce from "lodash.debounce";
import { useCallback, useEffect, useReducer, useState } from "react";
import { BookFilter } from "src/components/BookFilter/BookFilter";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getBooks } from "src/redux/slices/bookSlice";
import { FilterValues } from "src/types/FilterValues";

import { BookList } from "../components/BookList/BookList";
import { Container } from "../components/common/Container.styles";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import {
  MainPageContainer,
  MainPageContentContainer
} from "./styles/MainPage.styles";

const initialState = {
  search: "",
  genre: { fiction: false, adventure: false },
  status: { free: false, busy: false },
  selectedRating: 1,
  currentPage: 1
};

type Action =
  | { type: "search"; value: string }
  | { type: "genre"; genre: "fiction" | "adventure"; isChecked: boolean }
  | { type: "status"; status: "free" | "busy"; isChecked: boolean }
  | { type: "rating"; rating: number }
  | { type: "pagination"; page: number };

const reducer = (state: FilterValues, action: Action) => {
  switch (action.type) {
    case "search":
      return { ...state, search: action.value };

    case "genre": {
      return {
        ...state,
        genre: { ...state.genre, [action.genre]: action.isChecked }
      };
    }

    case "status": {
      return {
        ...state,
        status: { ...state.status, [action.status]: action.isChecked }
      };
    }

    case "rating":
      return { ...state, selectedRating: action.rating };

    case "pagination":
      return { ...state, currentPage: action.page };

    default:
      return state;
  }
};

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const [filters, dispatchReducer] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const booksArr = useAppSelector(({ books }) => books.books);

  useEffect(() => {
    (async () => {
      try {
        const { search } = filters;
        await dispatch(getBooks({ search })).unwrap();
      } catch (err: any) {
        console.log(err.message);
      }
    })();
  }, [dispatch, filters]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatchReducer({ type: "search", value });
    }, 700),
    []
  );

  const setSearchValue = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const setCheckboxValue = (
    type: "genre" | "status",
    key: "fiction" | "adventure" | "free" | "busy",
    isChecked: boolean
  ) => {
    if (type === "genre") {
      dispatchReducer({
        type: "genre",
        genre: key as "fiction" | "adventure",
        isChecked
      });
    } else if (type === "status") {
      dispatchReducer({
        type: "status",
        status: key as "free" | "busy",
        isChecked
      });
    }
  };

  const setRating = (rating: number) => {
    dispatchReducer({ type: "rating", rating });
  };

  const setCurrentPage = (page: number) => {
    dispatchReducer({ type: "pagination", page });
  };

  return (
    <MainPageContainer>
      <Header />
      <Container>
        <MainPageContentContainer>
          <BookList books={booksArr} />
          <BookFilter
            filters={filters}
            searchTerm={searchTerm}
            setSearchValue={setSearchValue}
            setCheckboxValue={setCheckboxValue}
            setRating={setRating}
          />
        </MainPageContentContainer>
      </Container>
      <Pagination
        currentPage={filters.currentPage}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
    </MainPageContainer>
  );
};
