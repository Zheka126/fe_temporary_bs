import { ChangeEvent, useRef, useState } from "react";
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import { AuthorType } from "src/types/author";
import { AddBookRequest } from "src/types/book";
import { GenreType } from "src/types/genre";

import { InputContainer, StyledInput } from "../../common/Input.styles";
import {
  ButtonsContainer,
  FormContent,
  ImageBlock,
  StyledForm
} from "./UploadBookForm.styles";

const languagesOptions = [
  { value: "English", label: "English" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" }
];

interface SelectValue {
  label: string;
  value: string;
}
interface MultiSelectValue extends SelectValue {
  id: string;
}

interface UploadBookFormProps {
  authors: AuthorType[];
  genres: GenreType[];
  getAuthors: () => void;
  uploadBook: (book: AddBookRequest) => void;
}

export const UploadBookForm = ({
  authors,
  genres,
  getAuthors,
  uploadBook
}: UploadBookFormProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [newBook, setNewBook] = useState<AddBookRequest>({
    title: "",
    authorId: [],
    genreId: [],
    language: "",
    publicationDate: "",
    image: null
  });
  console.log(newBook.image);

  const [selectedAuthors, setSelectedAuthors] = useState<
    MultiValue<MultiSelectValue>
  >([]);

  const [selectedGenres, setSelectedGenres] = useState<
    MultiValue<MultiSelectValue>
  >([]);

  const [selectedLanguages, setSelectedLanguages] =
    useState<SingleValue<SelectValue>>(null);

  const onCoverUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const acceptedFileType =
      file?.type === "image/png" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/bmp";
    if (file && acceptedFileType) {
      setNewBook({ ...newBook, image: file });
    }
  };

  const onMultiSelectChange = (
    optionArr: MultiValue<MultiSelectValue>,
    type: "authors" | "genres"
  ) => {
    const idsArr = optionArr.map((o) => o.id);
    if (type === "authors") {
      setSelectedAuthors(optionArr);
      setNewBook({ ...newBook, authorId: idsArr });
    } else {
      setSelectedGenres(optionArr);
      setNewBook({ ...newBook, genreId: idsArr });
    }
  };

  const onSingleSelectChange = (o: SingleValue<SelectValue>) => {
    setNewBook({ ...newBook, language: o!.value });
    setSelectedLanguages(o);
  };

  const onUploadBook = () => {
    uploadBook(newBook);
    setNewBook({
      title: "",
      authorId: [],
      genreId: [],
      language: "",
      publicationDate: "",
      image: null
    });
    setSelectedAuthors([]);
    setSelectedGenres([]);
  };

  const authorsOption = authors.map((author) => ({
    id: author.id,
    label: `${author.firstName} ${author.lastName}`,
    value: `${author.firstName} ${author.lastName}`
  }));

  const genresOption = genres.map((genre) => ({
    id: genre.id,
    label: genre.name,
    value: genre.name
  }));

  const imgSrc = newBook.image ? URL.createObjectURL(newBook.image) : "";

  return (
    <StyledForm>
      <ImageBlock>
        <img src={imgSrc} alt="book cover" />
        <input
          type="file"
          ref={inputFileRef}
          accept=".png, .jpg, .bmp"
          onChange={onCoverUpload}
        />
        <button type="button" onClick={() => inputFileRef.current?.click()}>
          Upload book cover
        </button>
        <span>.png, .jpg, .bmp only*</span>
      </ImageBlock>
      <FormContent>
        <InputContainer>
          <StyledInput
            id="title"
            type="text"
            placeholder="Title"
            bgcColor="gray"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            //   isError={Boolean(touched.username && errors.username)}
            //   {...getFieldProps('username')}
          />
          {/* {touched.username && errors.username && (
              <StyledErrorMessage>
              {errors.username}
              </StyledErrorMessage>
    )} */}
        </InputContainer>

        <InputContainer>
          <Select
            options={authorsOption}
            placeholder="Authors"
            onFocus={getAuthors}
            isMulti
            value={selectedAuthors}
            onChange={(o) => onMultiSelectChange(o, "authors")}
          />
        </InputContainer>

        <InputContainer>
          <Select
            options={genresOption}
            placeholder="Genres"
            isMulti
            value={selectedGenres}
            onChange={(o) => onMultiSelectChange(o, "genres")}
          />
        </InputContainer>

        <InputContainer>
          <Select
            options={languagesOptions}
            placeholder="Languages"
            value={selectedLanguages}
            onChange={(o) => onSingleSelectChange(o)}
          />
        </InputContainer>

        <InputContainer>
          <input
            type="date"
            value={newBook.publicationDate}
            onChange={(e) =>
              setNewBook({ ...newBook, publicationDate: e.target.value })
            }
          />
        </InputContainer>

        <ButtonsContainer>
          <button type="button" onClick={onUploadBook}>
            Upload book
          </button>
          <button type="button">Cancel</button>
        </ButtonsContainer>
      </FormContent>
    </StyledForm>
  );
};
