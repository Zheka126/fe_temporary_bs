import { FormikHelpers, useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusCodes } from 'src/api/constants';
import { register } from 'src/api/requests';
import { UserRegistrationData } from 'src/types/user';

import { Button } from '../common/Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../common/common.styles';
import { Loader } from '../common/Loader/Loader';
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
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (
    values: UserRegistrationData,
    { setSubmitting, resetForm }: FormikHelpers<UserRegistrationData>
  ) => {
    try {
      setSubmitting(true);
      const { status } = await register(values);
      if (status === StatusCodes.CREATED) {
        resetForm();
        navigate('/login');
      }
    } catch (error: any) {
      setSubmitError(error.response.data);
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

      <InputContainer>
        {submitError && (
          <StyledErrorMessage data-testid="register-error">
            {submitError}
          </StyledErrorMessage>
        )}
      </InputContainer>

      {isSubmitting ? (
        <Loader size="mini" />
      ) : (
        <ButtonsContainer data-testid="buttons-container">
          <Button type="submit" title="Sign up" data-testid="signup-button" />
          <Button
            type="button"
            title="Log in"
            data-testid="login-button"
            onClick={() => navigate('/login')}
          />
        </ButtonsContainer>
      )}
      <StyledErrorMessage />
    </StyledForm>
  );
};
