import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useRef } from 'react';
import Select from 'react-select';
import { baseURL } from 'src/api/constants';
import { Button } from 'src/components';
import { ButtonsContainer } from 'src/components/common/Container.styles';
import {
  InputContainer,
  StyledErrorMessage,
} from 'src/components/common/Input.styles';
import { selectStyles } from 'src/components/common/Select.styles';
import {
  EmptyImageBlock,
  ImageBlock,
  UploadImgBtn,
} from 'src/components/ProfileUploadBook/UploadBookForm/UploadBookForm.styles';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { getAuthorsThunk } from 'src/redux/slices/authorsSlice';
import { BookDetailsType, BookDetailsUpdateRequest } from 'src/types/book';
import {
  availabilityOptions,
  getAuthorOptions,
  getGenresOptions,
  languageOptions,
} from 'src/utils';

import { CancelButton, EditInput } from '../BookDetails.styles';
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
  onModalClose: () => void;
}

export const EditForm = ({
  bookDetails,
  onUpdateBook,
  onModalClose,
}: EditFormProps) => {
  const dispatch = useAppDispatch();
  const inputFileRef = useRef<HTMLInputElement>(null);
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
    image: bookDetails.imageSrc,
    authorId: bookDetails.authors.map((author) => author.id),
    genreId: bookDetails.genres.map((genre) => genre.id),
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    setFieldError,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: editFormValidation,
    onSubmit: (vals, { setSubmitting }) => {
      onUpdateBook(vals);
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

  const isSelectGenresErr = Boolean(touched.genreId && errors.genreId);
  const isSelectLangErr = Boolean(touched.language && errors.language);
  const isSelectAvailabilityErr = Boolean(
    touched.availability && errors.availability
  );

  const imgSrc =
    typeof values.image === 'string'
      ? `${baseURL}/${values.image}`
      : URL.createObjectURL(values.image as File);

  useEffect(() => {
    (async () => {
      await dispatch(getAuthorsThunk());
    })();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div>
          <ImageBlock>
            {imgSrc ? (
              <img src={imgSrc} alt="book cover" />
            ) : (
              <EmptyImageBlock isError={Boolean(touched.image && errors.image)}>
                {touched.image && errors.image && (
                  <StyledErrorMessage>{errors.image}</StyledErrorMessage>
                )}
              </EmptyImageBlock>
            )}
            <input
              id="image"
              name="image"
              type="file"
              ref={inputFileRef}
              accept=".png, .jpg, .bmp"
              onChange={onCoverUpload}
            />
            <UploadImgBtn
              type="button"
              onClick={() => inputFileRef.current?.click()}
            >
              Upload book cover
            </UploadImgBtn>
          </ImageBlock>
        </div>
        <div style={{ width: '450px' }}>
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
            {touched.publicationDate && errors.publicationDate && (
              <StyledErrorMessage>{errors.publicationDate}</StyledErrorMessage>
            )}
          </InputContainer>
        </div>
        <div style={{ width: '450px' }}>
          <InputContainer>
            <label htmlFor="authorId">Authors</label>
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
              styles={selectStyles()}
            />
            {touched.authorId && errors.authorId && (
              <StyledErrorMessage>{errors.authorId}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="genreId">Genres</label>
            <Select
              defaultValue={getGenresOptions(bookDetails.genres)}
              isMulti
              id="genreId"
              name="genreId"
              options={getGenresOptions(allGenres)}
              styles={selectStyles(isSelectGenresErr)}
              onBlur={() => setFieldTouched('genreId', true)}
              onChange={(options) =>
                setFieldValue(
                  'genreId',
                  options!.map((o) => o.value)
                )
              }
            />
            {touched.genreId && errors.genreId && (
              <StyledErrorMessage>{errors.genreId}</StyledErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="language">Language</label>
            <Select
              defaultValue={languageOptions.find(
                (option) => option.value === bookDetails.language
              )}
              id="language"
              name="language"
              options={languageOptions}
              onChange={(o) => setFieldValue('language', o!.value)}
              styles={selectStyles(isSelectLangErr)}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="availability">Availability</label>
            <Select
              defaultValue={availabilityOptions.find(
                (option) => option.value === bookDetails.availability
              )}
              id="availability"
              name="availability"
              options={availabilityOptions}
              onChange={(o) => setFieldValue('availability', o!.value)}
              styles={selectStyles(isSelectAvailabilityErr)}
            />
          </InputContainer>
        </div>
      </div>
      <ButtonsContainer style={{ marginTop: '40px', justifyContent: 'center' }}>
        <Button
          style={{ maxWidth: '300px' }}
          type="submit"
          title="Submit"
          disabled={isSubmitting}
        />
        <CancelButton onClick={onModalClose}>Cancel</CancelButton>
      </ButtonsContainer>
    </form>
  );
};
