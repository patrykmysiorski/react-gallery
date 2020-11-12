import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-gallery">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
