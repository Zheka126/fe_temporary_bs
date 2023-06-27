import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../SignupForm/SignupForm.styles';
import { ForgotPasswordLink, StyledParagraph } from './LoginForm.styles';
import { loginValidation } from './loginValidation';

export interface LoginValues {
  username: string;
  password: string;
}

const initialValues: LoginValues = {
  username: '',
  password: '',
};

const inputOutline = (
  error: string | undefined,
  touched: boolean | undefined
) => (error && touched ? '1px solid red' : 'none');

export const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = (props: LoginValues) => {
    console.log(props);
    navigate('/main');
  };

  const { touched, errors, handleSubmit, getFieldProps } = useFormik({
    initialValues,
    validationSchema: loginValidation,
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
          iserror={Boolean(touched.username && errors.username)}
          {...getFieldProps('username')}
        />
        {touched.username && errors.username ? (
          <StyledErrorMessage>{errors.username}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput
          id="password"
          type="password"
          placeholder="Enter password"
          iserror={Boolean(touched.password && errors.password)}
          {...getFieldProps('password')}
        />
        {touched.password && errors.password ? (
          <StyledErrorMessage>{errors.password}</StyledErrorMessage>
        ) : null}
      </InputContainer>

      <ForgotPasswordLink to="">Forgot password?</ForgotPasswordLink>

      <Button
        type="submit"
        title="Log in"
        // disabled={Object.keys(errors).length}
      />
    </StyledForm>
  );
};
