import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { store } from './redux/store';
import { FC, useEffect, useState } from 'react';
import { RegistrationPage } from './pages/RegistrationPage';
import { MainPage } from './pages/MainPage';

/*
Todo:
2) Fix eslint

*/

export const App: FC = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/" element={<RegistrationPage />} />
            {/* <Route index element={<MainPage />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
=======
import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import { store } from './redux/store';

export const App = () => {
  const [state, setState] = useState(false);
  const age = 12;

  useEffect(() => {
    if (!state) setState(true);
  }, [state]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route index element={<MainPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
>>>>>>> 5e83d271137c7dd2a4e46027c9386784db3f74eb
  );
};
