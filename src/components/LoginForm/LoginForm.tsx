import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "src/api/requests";
import { LoginValues } from "src/types/LoginReq";

import { Button } from "../common/Button/Button";
import {
  InputContainer,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  Title
} from "../common/Input.styles";
import { Loader } from "../common/Loader/Loader";
import { ForgotPasswordLink, StyledParagraph } from "./LoginForm.styles";
import { loginValidation } from "./loginValidation";

const initialValues: LoginValues = {
  username: "",
  password: ""
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [submitErr, setSubmitErr] = useState("");
  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const onSubmit = async (values: LoginValues) => {
    try {
      setSubmitLoading(true);
      const { status, data: token } = await API.login(values);
      if (status === 200 && token) {
        localStorage.setItem("token", token);
        navigate("/main");
      }
    } catch (err: any) {
      setSubmitErr(err.response.data);
    } finally {
      setSubmitLoading(false);
    }
  };

  const { touched, errors, handleSubmit, getFieldProps } = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit
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
          isError={Boolean(touched.username && errors.username)}
          {...getFieldProps("username")}
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
          isError={Boolean(touched.password && errors.password)}
          {...getFieldProps("password")}
        />
        {touched.password && errors.password ? (
          <StyledErrorMessage>{errors.password}</StyledErrorMessage>
        ) : null}
      </InputContainer>
      {submitErr ? (
        <InputContainer>
          <StyledErrorMessage>{submitErr}</StyledErrorMessage>
        </InputContainer>
      ) : null}

      <ForgotPasswordLink to="">Forgot password?</ForgotPasswordLink>

      {isSubmitLoading ? (
        <Loader size="mini"/>
      ) : (
        <Button
          type="submit"
          title="Log in"
          // disabled={Object.keys(errors).length}
        />
      )}
    </StyledForm>
  );
};
