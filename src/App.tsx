import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FC, useState } from 'react';
import { RegistrationPage } from './pages/RegistrationPage';
import { MainPage } from './pages/MainPage';

/*
Todo:
2) Fix eslint
3) Figure out about styled-components and folders - Do we contain styles in separate files?

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
  );
};
