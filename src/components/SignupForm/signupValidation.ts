import * as Yup from 'yup';

const SIGNUP_ERROR_MESSAGES = {
  name: "Should be from 3 to 30 letters or symbols(space, -, ')",
  userName: "Should be unique and from 3 to 30 letters or symbols(space, -, ')",
  email: 'Invalid email format',
  password: 'Should be from 3 to 30 alphanumeric characters',
};

export const signupValidation = Yup.object({
  firstName: Yup.string()
    .min(3, SIGNUP_ERROR_MESSAGES.name)
    .max(30, SIGNUP_ERROR_MESSAGES.name)
    .required('Required'),
  lastName: Yup.string()
    .min(3, SIGNUP_ERROR_MESSAGES.name)
    .max(30, SIGNUP_ERROR_MESSAGES.name)
    .required('Required'),
  username: Yup.string()
    .min(3, SIGNUP_ERROR_MESSAGES.userName)
    .max(30, SIGNUP_ERROR_MESSAGES.userName)
    .required('Required'),
  // email: Yup.string().email(SIGNUP_ERROR_MESSAGES.email).required('Required'),
  email: Yup.string()
    // .email(SIGNUP_ERROR_MESSAGES.email)
    .required('Required')
    .test('valid-email', SIGNUP_ERROR_MESSAGES.email, (value) => {
      if (value) {
        // Validate email format using regular expression
        const emailRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(value);
      }
      return true; // Allow empty value (handled by the required() validator)
    }),
  password: Yup.string()
    .min(3, SIGNUP_ERROR_MESSAGES.password)
    .max(30, SIGNUP_ERROR_MESSAGES.password)
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
