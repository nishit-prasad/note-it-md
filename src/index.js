import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Sidebar from "./components/Sidebar";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>,
  document.getElementById("root")
);