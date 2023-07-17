import { useState } from "react";
import { AddAuthorForm } from "src/components/ProfileUploadBook/AddAuthorForm/AddAuthorForm";
import { UploadBookForm } from "src/components/ProfileUploadBook/UploadBookForm/UploadBookForm";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { addAuthorThunk, getAuthorsThunk } from "src/redux/slices/authorsSlice";
import { addBookThunk } from "src/redux/slices/bookSlice";
import { AddAuthorRequest } from "src/types/author";
import { AddBookRequest } from "src/types/book";

import { UploadBookContainer } from "./ProfileUploadBook.styles";

export const ProfileUploadBook = () => {
  const dispatch = useAppDispatch();

  const { authorsArr, genresArr } = useAppSelector(({ authors, genres }) => ({
    authorsArr: authors.authors,
    genresArr: genres.genres
  }));

  const [isAuthorsLoading, setAuthorsLoading] = useState(false);

  const getAuthors = async () => {
    try {
      setAuthorsLoading(true);
      await dispatch(getAuthorsThunk()).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
      setAuthorsLoading(false);
    }
  };

  const addAuthor = (author: AddAuthorRequest) => {
    dispatch(addAuthorThunk(author)).unwrap();
  };

  const uploadBook = async (book: AddBookRequest) => {
    await dispatch(addBookThunk(book)).unwrap();
  };

  return (
    <UploadBookContainer>
      <UploadBookForm
        authors={authorsArr}
        genres={genresArr}
        isAuthorsLoading={isAuthorsLoading}
        getAuthors={getAuthors}
        uploadBook={uploadBook}
      />
      <AddAuthorForm addAuthor={addAuthor} />
    </UploadBookContainer>
  );
};
