import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../common/Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../common/common.styles';
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
    <StyledForm onSubmit={handleSubmit} data-testid="login-form">
      <Title data-testid="login-title">Login</Title>
      <StyledParagraph data-testid="signup-link">
        Don't have an account yet? <Link to="/registration">Sign up</Link>
      </StyledParagraph>
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
          <StyledErrorMessage data-testid="username-error">
            {errors.password}
          </StyledErrorMessage>
        ) : null}
      </InputContainer>

      <ForgotPasswordLink to="" data-testid="forgot-password-link">
        Forgot password?
      </ForgotPasswordLink>

      <Button
        type="submit"
        title="Log in"
        data-testid="login-button"
        // disabled={Object.keys(errors).length}
      />
    </StyledForm>
  );
};
