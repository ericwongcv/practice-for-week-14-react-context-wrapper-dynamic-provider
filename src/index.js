import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  HoroscopeContext,
  HoroscopeProvider
} from "./context/HoroscopeContext";

const Root = () => {
  return (
    <HoroscopeProvider>
      <App />
    </HoroscopeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
