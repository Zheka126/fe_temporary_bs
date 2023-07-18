import { useState } from "react";
import { AddAuthorForm } from "src/components/ProfileUploadBook/AddAuthorForm/AddAuthorForm";
import { UploadBookForm } from "src/components/ProfileUploadBook/UploadBookForm/UploadBookForm";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { addAuthorThunk } from "src/redux/slices/authorsSlice";
import { AddAuthorRequest } from "src/types/author";

import { UploadBookContainer } from "./ProfileUploadBook.styles";

export const ProfileUploadBook = () => {
  const dispatch = useAppDispatch();

  const { authorsArr, genresArr } = useAppSelector(({ authors, genres }) => ({
    authorsArr: authors.authors,
    genresArr: genres.genres
  }));

  const [isAddAuthorsLoading, setAddAuthorsLoading] = useState(false);
  const [addAuthorsErr, setAddAuthorsErr] = useState("");

  const addAuthor = async (author: AddAuthorRequest) => {
    try {
      setAddAuthorsLoading(true);
      await dispatch(addAuthorThunk(author)).unwrap();
    } catch (err: any) {
      setAddAuthorsErr(err.message);
    } finally {
      setAddAuthorsLoading(false);
    }
  };

  return (
    <UploadBookContainer>
      <UploadBookForm authors={authorsArr} genres={genresArr} />
      <AddAuthorForm
        addAuthor={addAuthor}
        isAddAuthorsLoading={isAddAuthorsLoading}
        addAuthorsErr={addAuthorsErr}
      />
    </UploadBookContainer>
  );
};
