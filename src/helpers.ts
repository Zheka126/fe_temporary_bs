import * as Yup from 'yup';

const nameErrMessage = "Should be from 3 to 30 letters or symbols(space, -, ')";
const userNameErrMessage =
  "Should be unique and from 3 to 30 letters or symbols(space, -, ')";
const emailErrMessage =
  "Should be unique and, alphanumeric characters oor symbols(space, -, ')";
const passwordErrMessage = 'Should be from 3 to 30 alphanumeric characters';

export const registrationValidation = Yup.object({
  firstName: Yup.string()
    .min(3, nameErrMessage)
    .max(30, nameErrMessage)
    .required('Required'),
  lastName: Yup.string()
    .min(3, nameErrMessage)
    .max(30, nameErrMessage)
    .required('Required'),
  username: Yup.string()
    .min(3, userNameErrMessage)
    .max(30, userNameErrMessage)
    .required('Required'),
  email: Yup.string().email(emailErrMessage).required('Required'),
  password: Yup.string()
    .min(3, passwordErrMessage)
    .max(30, passwordErrMessage)
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
