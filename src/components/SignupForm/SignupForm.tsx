import { useFormik } from 'formik';
import { UserRegistrationData } from 'src/types/user';

import { Button } from '../common/Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../common/common.styles';
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

const onSubmit = (values: UserRegistrationData) => {
  // fetch('http://localhost:5001/api/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(values),
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       console.log('Регистрация прошла успешно!');
  //       // Дополнительный код, который нужно выполнить при успешной регистрации
  //     } else {
  //       console.error('Ошибка при регистрации:', response.statusText);
  //       // Дополнительный код для обработки ошибки регистрации
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Ошибка при выполнении запроса:', error);
  //     // Дополнительный код для обработки ошибки выполнения запроса
  //   });
};

export const SignupForm = () => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
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
        {touched.firstName && errors.firstName ? (
          <StyledErrorMessage data-testid="firstName-error">
            {errors.firstName}
          </StyledErrorMessage>
        ) : null}
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
        {touched.lastName && errors.lastName ? (
          <StyledErrorMessage data-testid="lastName-error">
            {errors.lastName}
          </StyledErrorMessage>
        ) : null}
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
        {touched.username && errors.username ? (
          <StyledErrorMessage data-testid="username-error">
            {errors.username}
          </StyledErrorMessage>
        ) : null}
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
        {touched.email && errors.email ? (
          <StyledErrorMessage data-testid="email-error">
            {errors.email}
          </StyledErrorMessage>
        ) : null}
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
        {touched.password && errors.password ? (
          <StyledErrorMessage data-testid="password-error">
            {errors.password}
          </StyledErrorMessage>
        ) : null}
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
        {touched.confirmPass && errors.confirmPass ? (
          <StyledErrorMessage data-testid="confirmPass-error">
            {errors.confirmPass}
          </StyledErrorMessage>
        ) : null}
      </InputContainer>

      <ButtonsContainer data-testid="buttons-container">
        <Button type="submit" title="Sign up" data-testid="signup-button" />
        <Button type="submit" title="Log in" data-testid="login-button" />
      </ButtonsContainer>
    </StyledForm>
  );
};
