import * as Yup from 'yup';

export const uploadBookValidation = Yup.object({
    image: Yup.string().required('Required'),
    title: Yup.string()
    .min(1, 'Minimum 1 character must me provided.')
    .max(70, 'Maximum 70 characters allowed.')
    .matches(
        /^[a-zA-Z0-9\s.,?!:;(){}[\]\-'"…]+$/,
      'Wrong format'
    )
    .required('Required.'),
    genreId: Yup.array().min(1, 'At least one genre must be selected.').required('Required'),
  language: Yup.string().required('Required'),
  // email: Yup.string().email(SIGNUP_ERROR_MESSAGES.email).required('Required'),
  publicationDate: Yup.string()
    // .email(SIGNUP_ERROR_MESSAGES.email)
    .required('Required'),
});
