import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../Input/FormInput';
import Button from '../Button/Button';
import { ButtonsContainer, StyledForm, Title } from './SignupForm.styles';

const initialValues = {
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
      {({ errors, touched }) => {
        console.log('touched: ', touched);
        console.log('errors: ', errors);
        return (
          <StyledForm>
            <Title>Sign Up</Title>
            {/* {createFormInput('firstName', 'text', 'First Name', touched, errors)} */}
            <label htmlFor="firstName">First Name</label>
            <FormInput id="firstName" name="firstName" type="text" placeholder="First name" />

            <label htmlFor="lastName">Last Name</label>
            <FormInput id="lastName" name="lastName" type="text" placeholder="Last name" />

            <label htmlFor="username">Username</label>
            <FormInput id="username" name="username" type="text" placeholder="Enter username" />

            <label htmlFor="email">Email</label>
            <FormInput id="email" name="email" type="email" placeholder="Enter email" />

            <label htmlFor="password">Password</label>
            <FormInput id="password" name="password" type="password" placeholder="Enter password" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />

            <ButtonsContainer>
              <Button type="submit" title="Sign up" callback={() => console.log('work')} />
              <Button type="submit" title="Log in" callback={() => console.log('work')} />
            </ButtonsContainer>
          </StyledForm>
        );
      }}
    </Formik>
  );
}
