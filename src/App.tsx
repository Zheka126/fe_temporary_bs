import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import RegistrationPage from './pages/RegistrationPage';
import { store } from './redux/store';
import React, { useEffect, useState } from 'react';

/*
Todo:
1) Get right fonts
2) Fix eslint
3) Figure out about styled-components and folders - Do we contain styles in separate files?


*/

function App() {
  const [state, setState] = useState(false);
  const age = 12;

  useEffect(() => {
    if (!state) setState(true);
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
}

export default App;
