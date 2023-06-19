import './App.css';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';

export const App = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(124324);
  }, []);

  return (
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
  );
};
