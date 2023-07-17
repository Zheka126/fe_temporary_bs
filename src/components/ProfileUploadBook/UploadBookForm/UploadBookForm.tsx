import { useFormik } from "formik";
import { ChangeEvent, useRef, useState } from "react";
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import { Button } from "src/components";
import { AuthorType } from "src/types/author";
import { AddBookRequest } from "src/types/book";
import { GenreType } from "src/types/genre";

import {
  InputContainer,
  StyledErrorMessage,
  StyledInput
} from "../../common/Input.styles";
import {
  ButtonsContainer,
  EmptyImageBlock,
  FormContent,
  ImageBlock,
  StyledForm,
  UploadImgBtn
} from "./UploadBookForm.styles";
import { uploadBookValidation } from "./UploadBookValidation";

const languagesOptions = [
  { value: "English", label: "English" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" }
];

const initialValues = {
  title: "",
  authorId: [],
  genreId: [],
  language: "",
  publicationDate: "",
  image: null
};

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

  // const [newBook, setNewBook] = useState<AddBookRequest>({
  //   title: "",
  //   authorId: [],
  //   genreId: [],
  //   language: "",
  //   publicationDate: "",
  //   image: null
  // });
  // console.log(newBook.image);

  // const [selectedAuthors, setSelectedAuthors] = useState<
  //   MultiValue<MultiSelectValue>
  // >([]);

  // const [selectedGenres, setSelectedGenres] = useState<
  //   MultiValue<MultiSelectValue>
  // >([]);

  // const [selectedLanguages, setSelectedLanguages] =
  //   useState<SingleValue<SelectValue>>(null);

  const {
    errors,
    touched,
    values,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    isSubmitting
  } = useFormik({
    initialValues,
    validationSchema: uploadBookValidation,
    onSubmit: () => console.log()
  });

  console.log('errors', errors);
  console.log('values', values);
  

  // const onSubmit = async (
  //   values: UserRegistrationData,
  //   { setSubmitting, resetForm }: FormikHelpers<UserRegistrationData>
  // ) => {
  //   try {
  //     setSubmitting(true);
  //     const { status } = await register(values);
  //     if (status === StatusCodes.CREATED) {
  //       toast.success('New account has been successfully created!');
  //       resetForm();
  //       navigate('/login');
  //     }
  //   } catch (error: any) {
  //     switch (error.response.status) {
  //       case StatusCodes.BAD_REQUEST:
  //         toast.error(
  //           'Please check your data and try again.'
  //         );
  //         break;
  //       case StatusCodes.INTERNAL_SERVER_ERROR:
  //         toast.error(
  //           'Your registration attempt has failed due to an internal server error. Please try again later.'
  //         );
  //         break;
  //       default:
  //         toast.error(error.message);
  //         break;
  //     }
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const onCoverUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const acceptedFileType =
      file?.type === "image/png" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/bmp";
    if (file && acceptedFileType) {
      // setNewBook({ ...newBook, image: file });
      setFieldValue("image", file);
    }
  };

  const onMultiSelectChange = (
    optionArr: MultiValue<MultiSelectValue>,
    type: "authors" | "genres"
  ) => {
    const idsArr = optionArr.map((o) => o.id);
    if (type === "authors") {
      // setSelectedAuthors(optionArr);
      setFieldValue("authorId", idsArr);
    } else {
      // setSelectedGenres(optionArr);
      setFieldValue("genreId", idsArr);
    }
  };

  const onSingleSelectChange = (o: SingleValue<SelectValue>) => {
    setFieldValue("language", o!.value);
    // setSelectedLanguages(o);
  };

  // const onUploadBook = () => {
  //   uploadBook(newBook);
  //   setNewBook({
  //     title: "",
  //     authorId: [],
  //     genreId: [],
  //     language: "",
  //     publicationDate: "",
  //     image: null
  //   });
  //   setSelectedAuthors([]);
  //   setSelectedGenres([]);
  // };

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

  const imgSrc = values.image ? URL.createObjectURL(values.image) : "";

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ImageBlock>
        {imgSrc ? <img src={imgSrc} alt="book cover" /> : <EmptyImageBlock />}
        <input
          id="image"
          name='image'
          type="file"
          ref={inputFileRef}
          accept=".png, .jpg, .bmp"
          onChange={onCoverUpload}
        />
        {touched.image && errors.image && (
          <StyledErrorMessage>{errors.image}</StyledErrorMessage>
          // <div>{errors.image}</div>
        )}
        <UploadImgBtn
          type="button"
          onClick={() => inputFileRef.current?.click()}
        >
          Upload book cover
        </UploadImgBtn>
        <span>.png, .jpg, .bmp only*</span>
      </ImageBlock>
      <FormContent>
        <InputContainer>
          <StyledInput
            id="title"
            type="text"
            placeholder="Title"
            bgcColor="gray"
            // isError={Boolean(touched.title && errors.title)}
            {...getFieldProps("title")}
          />
          {touched.title && errors.title && (
            <StyledErrorMessage>{errors.title}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Select
            id="authorId"
            name='authorId'
            options={authorsOption}
            placeholder="Authors"
            onFocus={getAuthors}
            isMulti
            // value={selectedAuthors}
            onChange={(o) => onMultiSelectChange(o, "authors")}
            // {...getFieldProps('authorId')}
          />
          {touched.authorId && errors.authorId && (
            <StyledErrorMessage>{errors.authorId}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Select
            id="genreId"
            options={genresOption}
            placeholder="Genres"
            isMulti
            // value={selectedGenres}
            onChange={(o) => onMultiSelectChange(o, "genres")}
          />
          {touched.genreId && errors.genreId && (
            <StyledErrorMessage>{errors.genreId}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Select
            id="language"
            options={languagesOptions}
            placeholder="Languages"
            // value={selectedLanguages}
            onChange={(o) => onSingleSelectChange(o)}
          />
          {touched.language && errors.language && (
            <StyledErrorMessage>{errors.language}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <input
            id="publicationDate"
            type="date"
            // isError={Boolean(touched.publicationDate && errors.publicationDate)}
            {...getFieldProps("publicationDate")}
          />
          {touched.publicationDate && errors.publicationDate && (
            <StyledErrorMessage>{errors.publicationDate}</StyledErrorMessage>
          )}
        </InputContainer>

        <ButtonsContainer>
          {/* <button type="button" onClick={onUploadBook}> */}
          <button type="submit">Upload book</button>
          <button type="button">Cancel</button>
        </ButtonsContainer>
      </FormContent>
    </StyledForm>
  );
};
