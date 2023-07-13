import debounce from "lodash.debounce";
import { useCallback, useEffect, useReducer, useState } from "react";
import { BookFilter } from "src/components/BookFilter/BookFilter";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getBooksThunk } from "src/redux/slices/bookSlice";
import { FilterValues } from "src/types/FilterValues";

import { BookList } from "../components/BookList/BookList";
import { Container } from "../components/common/Container.styles";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import {
  MainPageContainer,
  MainPageContentContainer,
  NoBooksText
} from "./styles/MainPage.styles";

const initialState = {
  search: "",
  genre: {
    fiction: false,
    adventure: false,
    horror: false,
    historical: false,
    romance: false,
    western: false,
    mystery: false,
    science_fiction: false,
    fantasy: false,
    dystopian: false,
  },
  status: { free: false, busy: false },
  selectedRating: null,
  currentPage: 1
};

type Action =
  | { type: "search"; value: string }
  | { type: "genre"; genre: string; isChecked: boolean }
  | { type: "status"; status: "free" | "busy"; isChecked: boolean }
  | { type: "rating"; rating: number | null }
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
  const [searchVal, setSearchVal] = useState("");
  
  const books = useAppSelector((state) => state.books.books);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getBooksThunk(filters)).unwrap();
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

  const onHandleSearchValue = (value: string) => {
    setSearchVal(value);
    debouncedSearch(value);
  };

  const setCheckboxValue = (
    type: "genre" | "status",
    key: string,
    isChecked: boolean
  ) => {
    if (type === "genre") {
      dispatchReducer({
        type: "genre",
        genre: key,
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

  const setRating = (rate: number) => {
    const rating = rate === 1 && filters.selectedRating === 1 ? null : rate
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
          {
            books.length
            ?
            <BookList books={books} />
            :
            <NoBooksText>No books yet 🙁</NoBooksText>
          }
          <BookFilter
            filters={filters}
            searchTerm={searchVal}
            setSearchValue={onHandleSearchValue}
            setCheckboxValue={setCheckboxValue}
            setRating={setRating}
          />
        </MainPageContentContainer>
      </Container>
      <Pagination
        // pageCount={Math.ceil(booksArr.length / 12)}
        pageCount={20}
        currentPage={filters.currentPage}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
    </MainPageContainer>
  );
};
