import { array, object, string } from 'yup';

export const editFormValidation = object({
  title: string()
    .min(1, 'Minimum 1 character must me provided.')
    .max(70, 'Maximum 70 characters allowed.')
    .matches(/^[a-zA-Z0-9\s.,?!:;(){}[\]\-'"…]+$/, 'Wrong format')
    .required('Required'),
  image: string().required('Required'),
  description: string().required('Required'),
  genreId: array().min(1, 'Required').required('Required'),
  publicationDate: string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in the format YYYY-MM-DD')
    .required('Required'),
});
