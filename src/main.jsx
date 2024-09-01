import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import ErrorBoundary from "./providers/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContextProvider>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
