import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../SignupForm/SignupForm.styles';
import { ForgotPasswordLink, StyledParagraph } from './LoginForm.styles';

export interface ILoginValues {
  username: string;
  password: string;
}

const initialValues: ILoginValues = {
  username: '',
  password: '',
};

const onSubmit = (props: ILoginValues) => {
  console.log(props);
};

export const LoginForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <StyledForm onSubmit={handleSubmit}>
            <Title>Login</Title>
            <StyledParagraph>
              Don't have an account yet? <Link to="/registration">Sign up</Link>
            </StyledParagraph>
            <InputContainer>
              <label htmlFor="username">Username</label>
              <StyledInput
                name="username"
                id="username"
                type="text"
                placeholder="Enter username"
              />
              <StyledErrorMessage name="username" component="span" />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">Password</label>
              <StyledInput
                name="password"
                id="password"
                type="text"
                placeholder="Enter password"
              />
              <StyledErrorMessage name="password" component="span" />
            </InputContainer>

            <ForgotPasswordLink to="">Forgot password?</ForgotPasswordLink>

            <Button type="submit" title="Log in" />
          </StyledForm>
        );
      }}
    </Formik>
  );
};
