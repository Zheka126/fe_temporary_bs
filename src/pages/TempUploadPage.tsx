import { AddAuthorForm } from "src/components/AddAuthorForm/AddAuthorForm";
import { UploadBookForm } from "src/components/UploadBookForm/UploadBookForm";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { addAuthorThunk, getAuthorsThunk } from "src/redux/slices/authorsSlice";
import { addBookThunk } from "src/redux/slices/bookSlice";
import { AddAuthorRequest } from "src/types/author";
import { AddBookRequest } from "src/types/book";

import { UploadBookContainer } from "./TempUploadPage.styles";

export const TempUploadPage = () => {
  const dispatch = useAppDispatch();

  const { authorsArr, genresArr } = useAppSelector(({ authors, genres }) => ({
    authorsArr: authors.authors,
    genresArr: genres.genres
  }));

  const getAuthors = async () => {
    dispatch(getAuthorsThunk()).unwrap();
  };

  const addAuthor = (author: AddAuthorRequest) => {
    dispatch(addAuthorThunk(author)).unwrap();
  };

  const uploadBook = (book: AddBookRequest) => {
    dispatch(addBookThunk(book)).unwrap();
    console.log(book);
    
  };

  return (
    <UploadBookContainer>
      <UploadBookForm
        authors={authorsArr}
        genres={genresArr}
        getAuthors={getAuthors}
        uploadBook={uploadBook}
      />
      <AddAuthorForm addAuthor={addAuthor} />
    </UploadBookContainer>
  );
};
