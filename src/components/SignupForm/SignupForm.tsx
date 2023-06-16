import * as Yup from 'yup';
import {
  ButtonsContainer,
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from './SignupForm.styles';
import { Formik } from 'formik';
import { Button } from '../Button/Button';
import { FC } from 'react';

export interface IRegistrationValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IRegistrationValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const errMsgForName = "Should be from 3 to 30 letters or symbols(space, -, ')";
const errMsgForUsername = "Should be unique and from 3 to 30 letters or symbols(space, -, ')";
const errorMessageForEmail =
  "Should be unique and, alphanumeric characters oor symbols(space, -, ')";
const errMsgForPass = 'Should be from 3 to 30 alphanumeric characters';

const validationSchema = Yup.object({
  firstName: Yup.string().min(3, errMsgForName).max(30, errMsgForName).required('Required'),
  lastName: Yup.string().min(3, errMsgForName).max(30, errMsgForName).required('Required'),
  username: Yup.string().min(3, errMsgForUsername).max(30, errMsgForUsername).required('Required'),
  email: Yup.string().email(errorMessageForEmail).required('Required'),
  password: Yup.string().min(3, errMsgForPass).max(30, errMsgForPass).required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

const onSubmit = (props: IRegistrationValues) => {
  console.log(props);
};

export const SignupForm: FC = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                outline={errors.firstName && touched.firstName ? '1px solid red' : 'none'}
              />
              <StyledErrorMessage name="firstName" component={'span'} />
            </InputContainer>

            <InputContainer>
              <label htmlFor="lastName">Last Name</label>
              <StyledInput
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last name"
                outline={errors.lastName && touched.lastName ? '1px solid red' : 'none'}
              />
              <StyledErrorMessage name="lastName" component={'span'} />
            </InputContainer>

            <InputContainer>
              <label htmlFor="username">Username</label>
              <StyledInput
                name="username"
                id="username"
                type="text"
                placeholder="Enter username"
                outline={errors.username && touched.username ? '1px solid red' : 'none'}
              />
              <StyledErrorMessage name="username" component={'span'} />
            </InputContainer>

            <InputContainer>
              <label htmlFor="email">Email</label>
              <StyledInput
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                outline={errors.email && touched.email ? '1px solid red' : 'none'}
              />
              <StyledErrorMessage name="email" component={'span'} />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">Password</label>
              <StyledInput
                name="password"
                id="password"
                type="password"
                placeholder="Enter password"
                outline={errors.password && touched.password ? '1px solid red' : 'none'}
              />
              <StyledErrorMessage name="password" component={'span'} />
            </InputContainer>

            <InputContainer>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <StyledInput
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                outline={
                  errors.confirmPassword && touched.confirmPassword ? '1px solid red' : 'none'
                }
              />
              <StyledErrorMessage name="confirmPassword" component={'span'} />
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
