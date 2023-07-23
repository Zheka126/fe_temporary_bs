import 'react-toastify/dist/ReactToastify.css';

import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './components';
import { persistor } from './redux/store';
import { theme } from './theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename='/'>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          data-testid="toast"
        />
        <Tooltip id="tooltip" place="bottom" delayShow={500} />
      </HashRouter>
    </ThemeProvider>
  );
};
