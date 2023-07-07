import { BookDetailsPage } from './pages/BookDetailsPage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/RegistrationPage';

export const openRoutes = [
  { component: RegistrationPage, path: '/registration' },
  { component: LoginPage, path: '/login' },
];

export const privateRoutes = [
  { component: MainPage, path: '/main' },
  { component: MainPage, path: '/main' },
  { component: BookDetailsPage, path: '/book_details/:id' },
];
