import axios from "axios";
import { useEffect, useState } from "react";
import { BookFilter } from "src/components/BookFilter/BookFilter";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getBooks } from "src/redux/slices/bookSlice";
import { BookItem } from "src/types/BookItem";

import { BookList } from "../components/BookList/BookList";
import { Container } from "../components/common/Container.styles";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import {
  MainPageContainer,
  MainPageContentContainer
} from "./styles/MainPage.styles";

export const MainPage = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const booksArr = useAppSelector(({ books }) => books.books);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getBooks()).unwrap();
      } catch (err: any) {
        console.log(err.message);
      }
    })();
  }, [dispatch]);

  return (
    <MainPageContainer>
      <Header />
      <Container>
        <MainPageContentContainer>
          <BookList books={booksArr} />
          <BookFilter />
        </MainPageContentContainer>
      </Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
    </MainPageContainer>
  );
};
