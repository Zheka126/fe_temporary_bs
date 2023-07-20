import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "src/api/constants";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getProfileMyBooksThunk } from "src/redux/slices/profileSlice";

import { Button, Pagination } from "..";
import { Container } from "../common/Container.styles";
import {
  MyBooksContentContainer,
  MyBooksItem,
  MyBooksList,
  ProfileMyBooksContainer,
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

  useEffect(() => {
    try {
      //   dispatch(getProfileMyBooksThunk(currentPage));
    } catch (err) {
      console.log(err);
    }
  }, [currentPage]);

  return (
    <ProfileMyBooksContainer>
      <Container>
        <MyBooksContentContainer>
          <MyBooksList>
            {myBooks.map((book) => {
              return (
                <MyBooksItem key={book.id} to={`/books/${book.id}`}>
                  {/* <img src={`${baseURL}/${book.imageSrc}`} alt="book cover" /> */}
                  <img src={book.imageSrc} alt="book cover" />
                  <span>{book.title}</span>
                </MyBooksItem>
              );
            })}
          </MyBooksList>
          <UploadBookButtonContainer>
            <Button title="Upload book" onClick={() => navigate('/profile/upload-book')} />
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
