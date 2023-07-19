import 'react-toastify/dist/ReactToastify.css';

import { FormikHelpers, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { StatusCodes } from 'src/api/constants';
import { register } from 'src/api/requests/auth';
import { UserRegistrationData } from 'src/types/user';

import { Loader } from '..';
import { Button } from '../common/Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../common/Input.styles';
import { ButtonsContainer } from './SignupForm.styles';
import { signupValidation } from './signupValidation';

const initialValues: UserRegistrationData = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPass: '',
};

export const SignupForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (
    values: UserRegistrationData,
    { setSubmitting, resetForm }: FormikHelpers<UserRegistrationData>
  ) => {
    try {
      setSubmitting(true);
      const { status } = await register(values);
      if (status === StatusCodes.CREATED) {
        toast.success('New account has been successfully created!');
        resetForm();
        navigate('/');
      }
    } catch (error: any) {
      switch (error.response.status) {
        case StatusCodes.BAD_REQUEST:
          toast.error(
            'Please check your data and try again.'
          );
          break;
        case StatusCodes.INTERNAL_SERVER_ERROR:
          toast.error(
            'Your registration attempt has failed due to an internal server error. Please try again later.'
          );
          break;
        default:
          toast.error(error.message);
          break;
      }
    } finally {
      setSubmitting(false);
    }
  };

  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: signupValidation,
      onSubmit,
    });

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="signup-form">
      <Title data-testid="signup-title">Sign Up</Title>
      <InputContainer data-testid="firstName-input-container">
        <label htmlFor="firstName">First Name</label>
        <StyledInput
          id="firstName"
          type="text"
          placeholder="First name"
          isError={Boolean(touched.firstName && errors.firstName)}
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && (
          <StyledErrorMessage data-testid="firstName-error">
            {errors.firstName}
          </StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer data-testid="lastName-input-container">
        <label htmlFor="lastName">Last Name</label>
        <StyledInput
          id="lastName"
          type="text"
          placeholder="Last name"
          isError={Boolean(touched.lastName && errors.lastName)}
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && (
          <StyledErrorMessage data-testid="lastName-error">
            {errors.lastName}
          </StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer data-testid="username-input-container">
        <label htmlFor="username">Username</label>
        <StyledInput
          id="username"
          type="text"
          placeholder="Enter username"
          isError={Boolean(touched.username && errors.username)}
          {...getFieldProps('username')}
        />
        {touched.username && errors.username && (
          <StyledErrorMessage data-testid="username-error">
            {errors.username}
          </StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer data-testid="email-input-container">
        <label htmlFor="email">Email</label>
        <StyledInput
          id="email"
          type="email"
          placeholder="Enter email"
          isError={Boolean(touched.email && errors.email)}
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && (
          <StyledErrorMessage data-testid="email-error">
            {errors.email}
          </StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer data-testid="password-input-container">
        <label htmlFor="password">Password</label>
        <StyledInput
          id="password"
          type="password"
          placeholder="Enter password"
          isError={Boolean(touched.password && errors.password)}
          {...getFieldProps('password')}
        />
        {touched.password && errors.password && (
          <StyledErrorMessage data-testid="password-error">
            {errors.password}
          </StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer data-testid="confirmPass-input-container">
        <label htmlFor="confirmPass">Confirm Password</label>
        <StyledInput
          id="confirmPass"
          type="password"
          placeholder="Confirm password"
          isError={Boolean(touched.confirmPass && errors.confirmPass)}
          {...getFieldProps('confirmPass')}
        />
        {touched.confirmPass && errors.confirmPass && (
          <StyledErrorMessage data-testid="confirmPass-error">
            {errors.confirmPass}
          </StyledErrorMessage>
        )}
      </InputContainer>

      {isSubmitting ? (
        <Loader size="mini" />
      ) : (
        <ButtonsContainer data-testid="buttons-container">
          <Button
            type="submit"
            title="Sign up"
            data-testid="signup-button"
          />
          <Button
            type="button"
            title="Log in"
            data-testid="login-button"
            data-tooltip-id="tooltip"
            data-tooltip-content="Go to the login page"
            onClick={() => navigate('/')}
          />
        </ButtonsContainer>
      )}
      <StyledErrorMessage />
      <ToastContainer autoClose={3000} />
    </StyledForm>
  );
};
