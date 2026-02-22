import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { I18nextProvider } from "react-i18next";
import i18next from "./il8n";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
