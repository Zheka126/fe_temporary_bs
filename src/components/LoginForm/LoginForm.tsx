import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import {
  InputContainer,
  StyledForm,
  StyledInput,
  Title,
} from '../SignupForm/SignupForm.styles';
import { ForgotPasswordLink, StyledParagraph } from './LoginForm.styles';

export interface LoginValues {
  username: string;
  password: string;
}

const initialValues: LoginValues = {
  username: '',
  password: '',
};

export const LoginForm = () => {
  const onSubmit = (props: LoginValues) => {
    console.log(props);
  };

  const { handleSubmit, getFieldProps } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <StyledParagraph>
        Don't have an account yet? <Link to="/registration">Sign up</Link>
      </StyledParagraph>
      <InputContainer>
        <label htmlFor="username">Username</label>
        <StyledInput
          id="username"
          type="text"
          placeholder="Enter username"
          {...getFieldProps('username')}
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput
          id="password"
          type="password"
          placeholder="Enter password"
          {...getFieldProps('password')}
        />
      </InputContainer>

      <ForgotPasswordLink to="">Forgot password?</ForgotPasswordLink>

      <Button type="submit" title="Log in" />
    </StyledForm>
  );
};
