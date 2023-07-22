import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "src/api/constants";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getProfileMyBooksThunk } from "src/redux/slices/profileSlice";

import { Button, Loader, Pagination } from "..";
import { Container } from "../common/Container.styles";
import {
  MyBooksContentContainer,
  MyBooksItem,
  MyBooksList,
  ProfileMyBooksContainer,
  ProNoMyBooksOrErr,
  UploadBookButtonContainer
} from "./ProfileMyBooks.styles";

export const ProfileMyBooks = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { myBooks, totalMyBooksRecord } = useAppSelector(({ profile }) => ({
    myBooks: profile.myBooks,
    totalMyBooksRecord: profile.totalMyBooksRecords
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const [isProBooksLoading, setProBooksLoading] = useState(true);

  const [proBooksErr, setProBooksErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setProBooksLoading(true);
        await dispatch(getProfileMyBooksThunk(currentPage)).unwrap();
      } catch (err: any) {
        setProBooksErr(err.message);
      } finally {
        setProBooksLoading(false);
      }
    })();
  }, [currentPage]);

  return (
    <ProfileMyBooksContainer>
      <Container>
        <MyBooksContentContainer>
          {isProBooksLoading ? (
            <Loader size="big" />
          ) : proBooksErr ? (
            <ProNoMyBooksOrErr>{proBooksErr} 🙁</ProNoMyBooksOrErr>
          ) : myBooks.length ? (
            <MyBooksList>
              {myBooks.map((book) => {
                return (
                  <MyBooksItem key={book.id} to={`/books/${book.id}`}>
                    <img src={`${baseURL}/${book.imageSrc}`} alt="book cover" />
                    <span>{book.title}</span>
                  </MyBooksItem>
                );
              })}
            </MyBooksList>
          ) : (
            <ProNoMyBooksOrErr>No books yet</ProNoMyBooksOrErr>
          )}
          <UploadBookButtonContainer>
            <Button
              title="Upload book"
              onClick={() => navigate("/profile/upload-book")}
            />
          </UploadBookButtonContainer>
        </MyBooksContentContainer>
      </Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={Math.ceil(totalMyBooksRecord / 12)}
      />
    </ProfileMyBooksContainer>
  );
};
