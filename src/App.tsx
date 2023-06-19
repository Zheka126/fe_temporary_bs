import { Provider } from 'react-redux';
import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';
import { MainPage } from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

export const App = () => {
  const [state, setState] = useState(false);

  useEffect(() => {


    
    console.log(124324);
  }, []);

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
