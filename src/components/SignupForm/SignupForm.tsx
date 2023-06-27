import { useFormik } from 'formik';

import { Button } from '../Button/Button';
import {
  ButtonsContainer,
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from './SignupForm.styles';
import { signupValidation } from './signupValidation';

export interface RegistrationValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPass: string;
}

const initialValues: RegistrationValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPass: '',
};

const onSubmit = (values: RegistrationValues) => {
  console.log(values);
};

export const SignupForm = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    getFieldProps,
  } = useFormik({
    initialValues,
    validationSchema: signupValidation,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
      <InputContainer>
        <label htmlFor="firstName">First Name</label>
        <StyledInput
          id="firstName"
          type="text"
          placeholder="First name"
          errorTouched={touched.firstName && errors.firstName}
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName ? (
          <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>
        ) : null}
      </InputContainer>
      <InputContainer>
        <label htmlFor="lastName">Last Name</label>
        <StyledInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          errorTouched={touched.lastName && errors.lastName}
        />
        {touched.lastName && errors.lastName ? (
          <StyledErrorMessage>{errors.lastName}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="username">Username</label>
        <StyledInput
          id="username"
          name="username"
          type="text"
          value={values.username}
          placeholder="Enter username"
          onChange={handleChange}
          onBlur={handleBlur}
          errorTouched={touched.username && errors.username}
        />
        {touched.username && errors.username ? (
          <StyledErrorMessage>{errors.username}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="email">Email</label>
        <StyledInput
          id="email"
          name="email"
          value={values.email}
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          onBlur={handleBlur}
          errorTouched={touched.email && errors.email}
        />
        {touched.email && errors.email ? (
          <StyledErrorMessage>{errors.email}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput
          id="password"
          name="password"
          value={values.password}
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          onBlur={handleBlur}
          errorTouched={touched.password && errors.password}
        />
        {touched.password && errors.password ? (
          <StyledErrorMessage>{errors.password}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="confirmPass">Confirm Password</label>
        <StyledInput
          id="confirmPass"
          name="confirmPass"
          value={values.confirmPass}
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          onBlur={handleBlur}
          errorTouched={touched.confirmPass && errors.confirmPass}
        />
        {touched.confirmPass && errors.confirmPass ? (
          <StyledErrorMessage>{errors.confirmPass}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <ButtonsContainer>
        <Button type="submit" title="Sign up" />
        <Button type="submit" title="Log in" />
      </ButtonsContainer>
    </StyledForm>
  );
};
