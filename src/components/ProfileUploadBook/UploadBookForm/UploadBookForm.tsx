import { FormikHelpers, useFormik } from 'formik';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { components,MultiValue, SingleValue } from 'react-select';
import { Loader } from 'src/components';
import {
  InputContainer,
  StyledErrorMessage,
  StyledInput,
} from 'src/components/common/Input.styles';
import { selectStyles } from 'src/components/common/Select.styles';
import { useAppDispatch } from 'src/redux/hooks';
import { getAuthorsThunk } from 'src/redux/slices/authorsSlice';
import { addBookThunk } from 'src/redux/slices/bookSlice';
import { AuthorType } from 'src/types/author';
import { AddBookRequest } from 'src/types/book';
import { GenreType } from 'src/types/genre';
import { SelectValue } from 'src/types/select';
import { getAuthorOptions, getGenresOptions } from 'src/utils';

import {
  AddBookGetAuthorsErr,
  AddBookLoaderContainer,
  ButtonsContainer,
  CancelBtn,
  EmptyImageBlock,
  FormContent,
  ImageBlock,
  InputDate,
  PublicationDateText,
  StyledForm,
  UploadBtn,
  UploadImgBtn,
} from './UploadBookForm.styles';
import { uploadBookValidation } from './uploadBookValidation';

const languagesOptions = [
  { value: 'English', label: 'English' },
  { value: 'Romanian', label: 'Romanian' },
  { value: 'Russian', label: 'Russian' },
];

const initialValues = {
  title: '',
  description: '',
  authorId: [],
  genreId: [],
  language: '',
  publicationDate: '',
  image: null,
} as AddBookRequest;

const currentDate = new Date().toISOString().split('T')[0];

interface MultiSelectValue extends SelectValue {
  id: string;
}

interface UploadBookFormProps {
  authors: AuthorType[];
  genres: GenreType[];
}

const MenuList = ({ isGetAuthorsLoading, getAuthorsErr, ...props }: any) => {
  return isGetAuthorsLoading ? (
    <components.MenuList {...props}>
      <AddBookLoaderContainer>
        <Loader size="mini" />
      </AddBookLoaderContainer>
    </components.MenuList>
  ) : getAuthorsErr ? (
    <components.MenuList {...props}>
      <AddBookGetAuthorsErr>{getAuthorsErr} 😥</AddBookGetAuthorsErr>
    </components.MenuList>
  ) : (
    <components.MenuList {...props} />
  );
};

export const UploadBookForm = ({ authors, genres }: UploadBookFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [isGetAuthorsLoading, setGetAuthorsLoading] = useState(false);
  const [getAuthorsErr, setGetAuthorsErr] = useState('');
  const [uploadBookErr, setUploadBookErr] = useState('');

  const uploadBook = async (
    newBook: AddBookRequest,
    { setSubmitting, resetForm }: FormikHelpers<AddBookRequest>
  ) => {
    try {
      setSubmitting(true);
      await dispatch(addBookThunk(newBook)).unwrap();
      resetForm();
      navigate("/profile/my-books")
    } catch (err: any) {
      setUploadBookErr(err.message);
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
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: uploadBookValidation,
    onSubmit: uploadBook,
  });

  const getAuthors = async () => {
    try {
      setGetAuthorsLoading(true);
      await dispatch(getAuthorsThunk()).unwrap();
    } catch (err: any) {
      setGetAuthorsErr(err.message);
    } finally {
      setGetAuthorsLoading(false);
    }
  };

  const onCoverUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/bmp'];
    if (file && acceptedFileTypes.includes(file.type)) {
      setFieldValue('image', file);
    } else if (file && !acceptedFileTypes.includes(file.type))
      setFieldError('image', 'Files of type .png, .jpg, .bmp are allowed only');
  };

  const onMultiSelectChange = (
    optionArr: MultiValue<MultiSelectValue>,
    type: 'authors' | 'genres'
  ) => {
    const idsArr = optionArr.map((o) => o.id);
    if (type === 'authors') {
      setFieldValue('authorId', idsArr);
    } else {
      setFieldValue('genreId', idsArr);
    }
  };

  const onSingleSelectChange = (o: SingleValue<SelectValue>) => {
    setFieldValue('language', o!.value);
  };

  const imgSrc = values.image ? URL.createObjectURL(values.image) : '';

  const isSelectGenresErr = Boolean(touched.genreId && errors.genreId);
  const isSelectLangErr = Boolean(touched.language && errors.language);

  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <FormContent>
        <InputContainer>
          <StyledInput
            id="title"
            placeholder="Title"
            bgcColor="gray"
            isError={Boolean(touched.title && errors.title)}
            {...getFieldProps('title')}
          />
          {touched.title && errors.title && (
            <StyledErrorMessage>{errors.title}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <StyledInput
            id="description"
            placeholder="Description"
            bgcColor="gray"
            isError={Boolean(touched.description && errors.description)}
            {...getFieldProps('description')}
          />
          {touched.description && errors.description && (
            <StyledErrorMessage>{errors.description}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Select
            id="authorId"
            name="authorId"
            options={getAuthorOptions(authors)}
            placeholder="Authors"
            onFocus={getAuthors}
            isMulti
            styles={selectStyles()}
            components={{
              MenuList: (props) =>
                (
                  <MenuList
                    isGetAuthorsLoading={isGetAuthorsLoading}
                    getAuthorsErr={getAuthorsErr}
                    {...props}
                  />
                ) as any,
            }}
            onChange={(o) => onMultiSelectChange(o, 'authors')}
          />
        </InputContainer>

        <InputContainer>
          <Select
            id="genreId"
            options={getGenresOptions(genres)}
            placeholder="Genres"
            isMulti
            styles={selectStyles(isSelectGenresErr)}
            onBlur={() => setFieldTouched('genreId', true)}
            onChange={(o) => onMultiSelectChange(o, 'genres')}
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
            styles={selectStyles(isSelectLangErr)}
            onBlur={() => setFieldTouched('language', true)}
            onChange={(o) => onSingleSelectChange(o)}
          />
          {touched.language && errors.language && (
            <StyledErrorMessage>{errors.language}</StyledErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <PublicationDateText>Publication date</PublicationDateText>
          <InputDate
            id="publicationDate"
            type="date"
            max={currentDate}
            isError={Boolean(touched.publicationDate && errors.publicationDate)}
            {...getFieldProps('publicationDate')}
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
          ) : uploadBookErr ? (
            <AddBookGetAuthorsErr>{uploadBookErr} 😥</AddBookGetAuthorsErr>
          ) : (
            <>
              <UploadBtn
                type="submit"
                disabled={Boolean(Object.keys(errors).length)}
              >
                Upload book
              </UploadBtn>
              <CancelBtn
                type="button"
                onClick={() => navigate("/profile/my-books")}
              >
                Cancel
              </CancelBtn>
            </>
          )}
        </ButtonsContainer>
      </FormContent>
    </StyledForm>
  );
};
