import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { styled } from 'styled-components';
import Input from './Input';
import Button from './Button';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  button + button {
    margin-left: 5px;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: #de6b67;
`;

const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Should be from 3 to 30 letters or symbols(space, -, ')")
    .max(30, "Should be from 3 to 30 letters or symbols(space, -, ')")
    .required('Required'),
  lastName: Yup.string()
    .min(3, "Should be from 3 to 30 letters or symbols(space, -, ')")
    .max(30, "Should be from 3 to 30 letters or symbols(space, -, ')")
    .required('Required'),
  username: Yup.string()
    .min(3, "Should be unique and from 3 to 30 letters or symbols(space, -, ')")
    .max(30, "Should be unique and from 3 to 30 letters or symbols(space, -, ')")
    .required('Required'),
  email: Yup.string()
    .email("Should be unique and, alphanumeric characters oor symbols(space, -, ')")
    .required('Required'),
  password: Yup.string()
    .min(3, 'Should be from 3 to 30 alphanumeric characters')
    .max(30, 'Should be from 3 to 30 alphanumeric characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export default function SignupForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <Input name="firstName" type="text" placeholder="First name" error={errors.firstName} />
          <StyledErrorMessage name="firstName" component={'span'} />

          <Input name="lastName" type="text" placeholder="Last name" error={errors.lastName} />
          <StyledErrorMessage name="lastName" component={'span'} />

          <Input name="username" type="text" placeholder="Enter username" error={errors.username} />
          <StyledErrorMessage name="username" component={'span'} />

          <Input name="email" type="email" placeholder="Enter email" error={errors.email} />
          <StyledErrorMessage name="email" component={'span'} />

          <Input
            name="password"
            type="password"
            placeholder="Enter password"
            error={errors.password}
          />
          <StyledErrorMessage name="password" component={'span'} />

          <Input
            name="repeatPassword"
            type="password"
            placeholder="Repeat password"
            error={errors.repeatPassword}
          />
          <StyledErrorMessage name="repeatPassword" component={'span'} />

          <ButtonsContainer>
            <Button type="submit" title="Sign up" callback={() => console.log('work')} />
            <Button type="submit" title="Log in" callback={() => console.log('work')} />
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
}
