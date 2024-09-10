import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import ErrorBoundary from "./providers/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import SearchEventsContext from "./context/SearchEventsContext.jsx";
import ValidationContext from "./context/Authentication/ValidationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <SearchEventsContext>
        <AppContextProvider>
          <BrowserRouter>
          <ValidationContext>
            <ToastContainer />
            <App />
          </ValidationContext>
          </BrowserRouter>
        </AppContextProvider>
      </SearchEventsContext>
    </ErrorBoundary>
  </React.StrictMode>
);
