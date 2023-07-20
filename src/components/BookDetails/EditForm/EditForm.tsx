import { useFormik } from 'formik';
import { ChangeEvent, useEffect } from 'react';
import Select from 'react-select';
import { ButtonsContainer } from 'src/components/common/Container.styles';
import {
  InputContainer,
  StyledErrorMessage,
} from 'src/components/common/Input.styles';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { getAuthorsThunk } from 'src/redux/slices/authorsSlice';
import { BookDetailsType, BookDetailsUpdateRequest } from 'src/types/book';
import {
  availabilityOptions,
  getAuthorOptions,
  getGenresOptions,
  languageOptions,
} from 'src/utils';

import {
  CancelButton,
  EditInput,
  StyledModalContent,
  SubmitButton,
} from '../BookDetails.styles';
import { editFormValidation } from './editFormValidation';

// const createEditInput = (detailValue: string, label: string) => {
//   return (
//     <InputContainer>
//       <label htmlFor={detailValue}>{label}</label>
//       <EditInput
//         type="text"
//         id={detailValue}
//         name={detailValue}
//         value={bookDetails[detailValue]}
//         onChange={(event: ChangeEvent<HTMLInputElement>) =>
//           setBookDetails({
//             ...bookDetails,
//             [detailValue]: event.target.value,
//           })
//         }
//       />
//     </InputContainer>
//   );
// };

interface EditFormProps {
  bookDetails: BookDetailsType;
  onUpdateBook: (values: BookDetailsUpdateRequest) => void;
}

export const EditForm = ({ bookDetails, onUpdateBook }: EditFormProps) => {
  const dispatch = useAppDispatch();
  const { allAuthors, allGenres } = useAppSelector(({ authors, genres }) => ({
    allAuthors: authors.authors,
    allGenres: genres.genres,
  }));

  const initialValues = {
    bookId: bookDetails.id,
    title: bookDetails.title,
    description: bookDetails.description,
    language: bookDetails.language,
    publicationDate: bookDetails.publicationDate,
    availability: bookDetails.availability,
    image: null,
    authorId: bookDetails.authors.map((author) => author.id),
    genreId: bookDetails.genres.map((genre) => genre.id),
  };

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    setFieldError,
    setFieldValue,
    setFieldTouched,
    // isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: editFormValidation,
    onSubmit: (values, { setSubmitting }) => {
      onUpdateBook(values);
      setSubmitting(false);
    },
  });

  const onCoverUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/bmp'];
    if (file && acceptedFileTypes.includes(file.type)) {
      setFieldValue('image', file);
    } else if (file && !acceptedFileTypes.includes(file.type))
      setFieldError('image', 'Files of type .png, .jpg, .bmp are allowed only');
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAuthorsThunk());
    })();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <StyledModalContent>
        <div>
          <InputContainer>
            <label htmlFor="title">Edit title</label>
            <EditInput
              id="title"
              isError={Boolean(touched.title && errors.title)}
              {...getFieldProps('title')}
            />
            {touched.title && errors.title && (
              <StyledErrorMessage>{errors.title}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="description">Edit description</label>
            <EditInput
              id="description"
              {...getFieldProps('description')}
              isError={Boolean(touched.description && errors.description)}
            />
            {touched.title && errors.description && (
              <StyledErrorMessage>{errors.description}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="publicationDate">Edit publication date</label>
            <EditInput
              type="date"
              id="publicationDate"
              {...getFieldProps('publicationDate')}
              isError={Boolean(
                touched.publicationDate && errors.publicationDate
              )}
            />
            {touched.title && errors.publicationDate && (
              <StyledErrorMessage>{errors.publicationDate}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <input
              type="file"
              id="image"
              name="image"
              accept=".png, .jpg, .bmp"
              onChange={onCoverUpload}
            />
          </InputContainer>
        </div>
        <div>
          <InputContainer>
            <label htmlFor="authorId">Edit authors</label>
            <Select
              defaultValue={getAuthorOptions(bookDetails.authors)}
              isMulti
              id="authorId"
              name="authorId"
              options={getAuthorOptions(allAuthors)}
              onBlur={() => setFieldTouched('authorId', true)}
              onChange={(options) =>
                setFieldValue(
                  'authorId',
                  options!.map((o) => o.value)
                )
              }
              className="basic-multi-select"
            />
            {touched.authorId && errors.authorId && (
              <StyledErrorMessage>{errors.authorId}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="genreId">Edit genres</label>
            <Select
              defaultValue={getGenresOptions(bookDetails.genres)}
              isMulti
              id="genreId"
              name="genreId"
              options={getGenresOptions(allGenres)}
              onBlur={() => setFieldTouched('genreId', true)}
              onChange={(options) =>
                setFieldValue(
                  'genreId',
                  options!.map((o) => o.value)
                )
              }
              className="basic-multi-select"
            />
            {touched.genreId && errors.genreId && (
              <StyledErrorMessage>{errors.genreId}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="language">Edit language</label>
            <Select
              defaultValue={languageOptions.find(
                (option) => option.value === bookDetails.language
              )}
              id="language"
              name="language"
              options={languageOptions}
              onChange={(o) => setFieldValue('language', o!.value)}
              className="basic-multi-select"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="availability">Edit availability</label>
            <Select
              defaultValue={availabilityOptions.find(
                (option) => option.value === bookDetails.availability
              )}
              id="availability"
              name="availability"
              options={availabilityOptions}
              onChange={(o) => setFieldValue('availability', o!.value)}
              className="basic-multi-select"
            />
          </InputContainer>
        </div>
      </StyledModalContent>
      <ButtonsContainer>
        <SubmitButton type="submit">Submit</SubmitButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonsContainer>
    </form>
  );
};
