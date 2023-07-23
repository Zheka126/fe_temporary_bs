import { object, string } from 'yup';

export const addReviewValidation = object({
  title: string()
    .min(1, 'Minimum 1 character must me provided.')
    .max(70, 'Maximum 70 characters allowed.')
    .matches(/^[a-zA-Z0-9\s.,?!:;(){}[\]\-'"…]+$/, 'Wrong format')
    .required('Required'),
  content: string().required('Required'),
});
