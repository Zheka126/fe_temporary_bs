import * as Yup from 'yup';

export const uploadBookValidation = Yup.object({
  image: Yup.string().required('Required'),
  title: Yup.string()
    .min(1, 'Minimum 1 character must me provided.')
    .max(70, 'Maximum 70 characters allowed.')
    .matches(/^[a-zA-Z0-9\s.,?!:;(){}[\]\-'"…]+$/, 'Wrong format')
    .required('Required.'),
  description: Yup.string().required('Required'),
  genreId: Yup.array().min(1, 'Required').required('Required'),
  language: Yup.string().required('Required'),
  publicationDate: Yup.string().required('Required'),
  availability: Yup.boolean().required('Required'),
});
