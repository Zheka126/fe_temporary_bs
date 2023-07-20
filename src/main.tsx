import 'normalize.css';
import 'react-tooltip/dist/react-tooltip.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { store } from './redux/store';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
