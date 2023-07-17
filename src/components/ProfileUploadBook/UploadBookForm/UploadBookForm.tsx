import { FormikHelpers, useFormik } from "formik";
import { ChangeEvent, useRef } from "react";
import Select, { components, MultiValue, SingleValue } from "react-select";
import { Loader } from "src/components";
import { AuthorType } from "src/types/author";
import { AddBookRequest } from "src/types/book";
import { GenreType } from "src/types/genre";
import { SelectValue } from "src/types/select";

import {
  InputContainer,
  StyledErrorMessage,
  StyledInput
} from "../../common/Input.styles";
import {
  AddBookLoaderContainer,
  ButtonsContainer,
  CancelBtn,
  EmptyImageBlock,
  FormContent,
  ImageBlock,
  PublicationDateText,
  selectStyles,
  StyledForm,
  UploadBtn,
  UploadImgBtn
} from "./UploadBookForm.styles";
import { uploadBookValidation } from "./uploadBookValidation";

const languagesOptions = [
  { value: "English", label: "English" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" }
];

const initialValues = {
  title: "",
  description: "",
  authorId: [],
  genreId: [],
  language: "",
  publicationDate: "",
  image: null
};

const currentDate = new Date().toISOString().split("T")[0];

interface MultiSelectValue extends SelectValue {
  id: string;
}

interface UploadBookFormProps {
  authors: AuthorType[];
  genres: GenreType[];
  isAuthorsLoading: boolean;
  getAuthors: () => void;
  uploadBook: (book: AddBookRequest) => void;
}

const MenuList = ({ isAuthorsLoading, ...props }: any) => {
  return isAuthorsLoading ? (
    <components.MenuList {...props}>
      <AddBookLoaderContainer>
        <Loader size="mini" />
      </AddBookLoaderContainer>
    </components.MenuList>
  ) : (
    <components.MenuList {...props} />
  );
};

export const UploadBookForm = ({
  authors,
  genres,
  isAuthorsLoading,
  getAuthors,
  uploadBook
}: UploadBookFormProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (
    newBook: AddBookRequest,
    { setSubmitting, resetForm }: FormikHelpers<AddBookRequest>
  ) => {
    try {
      setSubmitting(true);
      await uploadBook(newBook);
    } catch (error: any) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const {
    errors,
    touched,
    values,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    isSubmitting
  } = useFormik({
    initialValues,
    validationSchema: uploadBookValidation,
    onSubmit
  });

  const onCoverUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const acceptedFileTypes = ["image/png", "image/jpeg", "image/bmp"];
    if (file && acceptedFileTypes.includes(file.type)) {
      setFieldValue("image", file);
    } else if (file && !acceptedFileTypes.includes(file.type))
      setFieldError("image", "Files of type .png, .jpg, .bmp are allowed only");
  };

  const onMultiSelectChange = (
    optionArr: MultiValue<MultiSelectValue>,
    type: "authors" | "genres"
  ) => {
    const idsArr = optionArr.map((o) => o.id);
    if (type === "authors") {
      setFieldValue("authorId", idsArr);
    } else {
      setFieldValue("genreId", idsArr);
    }
  };

  const onSingleSelectChange = (o: SingleValue<SelectValue>) => {
    setFieldValue("language", o!.value);
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

  const imgSrc = values.image ? URL.createObjectURL(values.image) : "";

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ImageBlock>
        {imgSrc ? <img src={imgSrc} alt="book cover" /> : <EmptyImageBlock />}
        <input
          id="image"
          name="image"
          type="file"
          ref={inputFileRef}
          accept=".png, .jpg, .bmp"
          onChange={onCoverUpload}
        />
        {touched.image && errors.image && (
          <StyledErrorMessage>{errors.image}</StyledErrorMessage>
        )}
        <UploadImgBtn
          type="button"
          onClick={() => inputFileRef.current?.click()}
        >
          Upload book cover
        </UploadImgBtn>
      </ImageBlock>
      <FormContent>
        <InputContainer>
          <StyledInput
            id="title"
            type="text"
            placeholder="Title"
            bgcColor="gray"
            {...getFieldProps("title")}
          />
          {touched.title && errors.title && (
            <StyledErrorMessage>{errors.title}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <StyledInput
            id="description"
            type="text"
            placeholder="Description"
            bgcColor="gray"
            {...getFieldProps("description")}
          />
          {touched.description && errors.description && (
            <StyledErrorMessage>{errors.description}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Select
            id="authorId"
            name="authorId"
            options={authorsOption}
            placeholder="Authors"
            onFocus={getAuthors}
            isMulti
            styles={selectStyles}
            // components={{ MenuList }}
            components={{
              MenuList: (props) =>
                (
                  <MenuList isAuthorsLoading={isAuthorsLoading} {...props} />
                ) as any
            }}
            onChange={(o) => onMultiSelectChange(o, "authors")}
          />
        </InputContainer>

        <InputContainer>
          <Select
            id="genreId"
            options={genresOption}
            placeholder="Genres"
            isMulti
            styles={selectStyles}
            onBlur={() => setFieldTouched("genreId", true)}
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
            styles={selectStyles}
            onBlur={() => setFieldTouched("language", true)}
            onChange={(o) => onSingleSelectChange(o)}
          />
          {touched.language && errors.language && (
            <StyledErrorMessage>{errors.language}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <PublicationDateText>Publication date</PublicationDateText>
          <input
            id="publicationDate"
            type="date"
            max={currentDate}
            {...getFieldProps("publicationDate")}
          />
          {touched.publicationDate && errors.publicationDate && (
            <StyledErrorMessage>{errors.publicationDate}</StyledErrorMessage>
          )}
        </InputContainer>

        <ButtonsContainer>
          {isSubmitting ? (
            <AddBookLoaderContainer>
              <Loader size="mini" />
            </AddBookLoaderContainer>
          ) : (
            <>
              <UploadBtn type="submit">Upload book</UploadBtn>
              <CancelBtn type="button">Cancel</CancelBtn>
            </>
          )}
        </ButtonsContainer>
      </FormContent>
    </StyledForm>
  );
};
