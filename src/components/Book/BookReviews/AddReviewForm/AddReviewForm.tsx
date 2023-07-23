import { FormikHelpers, useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addBookReview } from 'src/api/requests/book';
import { Button } from 'src/components';
import {
  InputContainer,
  StyledErrorMessage,
  StyledInput,
} from 'src/components/common/Input.styles';
import { AddReviewRequest } from 'src/types/review';

import { FormTitle, StyledInputArea } from './AddReviewForm.styles';
import { addReviewValidation } from './addReviewValidation';

export const AddReviewForm = () => {
  const { id } = useParams();

  const addReview = async (
    newReview: AddReviewRequest,
    { setSubmitting, resetForm }: FormikHelpers<AddReviewRequest>
  ) => {
    try {
      setSubmitting(true);
      console.log('newReview: ', newReview);
      await addBookReview(newReview);
      resetForm();
    } catch (err: any) {
      toast.error('Something went wrong with adding the new review');
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = {
    bookId: id!,
    rate: 3,
    title: '',
    content: '',
  };

  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: addReviewValidation,
      onSubmit: addReview,
      enableReinitialize: true,
    });

  return (
    <form onSubmit={handleSubmit} style={{ flex: 0.7 }}>
      <FormTitle>Add a Review</FormTitle>
      {/* <Rating selectedRating={} setSelectedRating={} /> */}
      <InputContainer>
        <label htmlFor="title">Title</label>
        <StyledInput
          id="title"
          placeholder="Your review's title"
          isError={Boolean(touched.title && errors.title)}
          {...getFieldProps('title')}
        />
        {touched.title && errors.title && (
          <StyledErrorMessage>{errors.title}</StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer>
        <label htmlFor="content">Review</label>
        <StyledInputArea
          id="content"
          placeholder="Your review"
          isError={Boolean(touched.content && errors.content)}
          {...getFieldProps('content')}
        />
        {touched.content && errors.content && (
          <StyledErrorMessage>{errors.content}</StyledErrorMessage>
        )}
      </InputContainer>
      <Button
        style={{ marginTop: '20px' }}
        title="Submit"
        disabled={isSubmitting}
        type="submit"
      />
    </form>
  );
};
