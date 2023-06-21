import { Formik } from 'formik';

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
  confirmPassword: string;
}

const initialValues: RegistrationValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const onSubmit = (props: RegistrationValues) => {
  console.log(props);
};

const inputOutline = (
  error: string | undefined,
  touched: boolean | undefined
) => (error && touched ? '1px solid red' : 'none');

export const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupValidation}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleSubmit }) => {
        return (
          <StyledForm onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
            <InputContainer>
              <label htmlFor="firstName">First Name</label>
              <StyledInput
                name="firstName"
                id="firstName"
                type="text"
                placeholder="First name"
                outline={inputOutline(errors.firstName, touched.firstName)}
              />
              <StyledErrorMessage name="firstName" component="span" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="lastName">Last Name</label>
              <StyledInput
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last name"
                outline={inputOutline(errors.lastName, touched.lastName)}
              />
              <StyledErrorMessage name="lastName" component="span" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="username">Username</label>
              <StyledInput
                name="username"
                id="username"
                type="text"
                placeholder="Enter username"
                outline={inputOutline(errors.username, touched.username)}
              />
              <StyledErrorMessage name="username" component="span" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="email">Email</label>
              <StyledInput
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                outline={inputOutline(errors.email, touched.email)}
              />
              <StyledErrorMessage name="email" component="span" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">Password</label>
              <StyledInput
                name="password"
                id="password"
                type="password"
                placeholder="Enter password"
                outline={inputOutline(errors.password, touched.password)}
              />
              <StyledErrorMessage name="password" component="span" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <StyledInput
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                outline={inputOutline(
                  errors.confirmPassword,
                  touched.confirmPassword
                )}
              />
              <StyledErrorMessage name="confirmPassword" component="span" />
            </InputContainer>

            <ButtonsContainer>
              <Button type="submit" title="Sign up" />
              <Button type="submit" title="Log in" />
            </ButtonsContainer>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
