import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(false);
  let age = 12;

  useEffect(() => {
    if (!state) setState(true);
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route index element={<MainPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
