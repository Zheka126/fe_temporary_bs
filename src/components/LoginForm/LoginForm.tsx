import 'react-toastify/dist/ReactToastify.css';

import { FormikHelpers, useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StatusCodes } from 'src/api/constants';
import { useAppDispatch } from 'src/redux/hooks';
import { loginThunk, setUser } from 'src/redux/slices/authSlice';
import { LoginValues } from 'src/types/user';
import { getUserTokenData } from 'src/utils';

import { Button } from '../common/Button/Button';
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title,
} from '../common/common.styles';
import { Loader } from '../common/Loader/Loader';
import { ForgotPasswordLink, StyledParagraph } from './LoginForm.styles';
import { loginValidation } from './loginValidation';

const initialValues: LoginValues = {
  username: '',
  password: '',
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: LoginValues,
    { setSubmitting, resetForm }: FormikHelpers<LoginValues>
  ) => {
    try {
      setSubmitting(true);
      const { status, data: token } = await dispatch(
        loginThunk(values)
      ).unwrap();

      if (status === StatusCodes.SUCCESS && token) {
        toast.success('Login is successful!');
        resetForm();
        localStorage.setItem('token', token);

        const user = getUserTokenData(token);
        dispatch(setUser(user));
        navigate('/main');
      }
    } catch (error: any) {
      switch (error.code) {
        case 'ERR_BAD_REQUEST':
          toast.error('Please check your username and password and try again.');
          break;
        case 'ERR_BAD_RESPONSE':
          toast.error(
            'Your login attempt has failed due to an internal server error. Please try again later.'
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

  const { touched, errors, handleSubmit, getFieldProps, isSubmitting } =
    useFormik({
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
        {touched.username && errors.username && (
          <StyledErrorMessage data-testid="username-error">
            {errors.username}
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
          <StyledErrorMessage data-testid="username-error">
            {errors.password}
          </StyledErrorMessage>
        )}
      </InputContainer>

      <ForgotPasswordLink to="" data-testid="forgot-password-link">
        Forgot password?
      </ForgotPasswordLink>

      {isSubmitting ? (
        <Loader size="mini" />
      ) : (
        <Button type="submit" title="Log in" data-testid="login-button" />
      )}
    </StyledForm>
  );
};
