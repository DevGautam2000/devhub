import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { Appcontextfun } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Appcontextfun>
        <AppRouter />
      </Appcontextfun>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
