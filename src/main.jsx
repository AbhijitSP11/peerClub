import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ServicesProvider } from "./Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ServicesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServicesProvider>
  </React.StrictMode>
);
