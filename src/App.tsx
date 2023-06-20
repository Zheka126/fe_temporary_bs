import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';

export const App = () => {
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
