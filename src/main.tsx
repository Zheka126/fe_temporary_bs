import "normalize.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import { App } from "./App";
import { persistor, store } from "./redux/store";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeProvider>
      </BrowserRouter>
      <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
    </Provider>
  </React.StrictMode>
);
