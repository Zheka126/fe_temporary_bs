import {
  AdminTabPage,
  BookDetailsPage,
  LoginPage,
  MainPage,
  RegistrationPage,
} from 'src/pages';

export const openRoutes = [
  { component: RegistrationPage, path: '/registration' },
  { component: LoginPage, path: '/login' },
];

export const privateRoutes = [
  { component: MainPage, path: '/main' },
  { component: BookDetailsPage, path: '/books/:id' },
  { component: AdminTabPage, path: '/admin/*' },
];
