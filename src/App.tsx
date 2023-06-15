import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
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
  );
};
