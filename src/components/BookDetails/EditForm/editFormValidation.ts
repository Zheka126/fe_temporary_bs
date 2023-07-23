import { array, object, string } from 'yup';

// in future will be imported
// why do we need min and required? because if there is min then required is not nedeed anymore
const uploadBookValidation = object({
  title: string()
    .min(1, 'Minimum 1 character must me provided.')
    .max(70, 'Maximum 70 characters allowed.')
    .matches(/^[a-zA-Z0-9\s.,?!:;(){}[\]\-'"…]+$/, 'Wrong format')
    .required('Required'),
  description: string().required('Required'),
  genreId: array().min(1, 'Required').required('Required'),
  authorId: array().min(1, 'Required').required('Required'),
  language: string().required('Required'),
  publicationDate: string().required('Required'),
});

export const editFormValidation = uploadBookValidation.concat(
  object({
    availability: string().required('Required'),
  })
);
