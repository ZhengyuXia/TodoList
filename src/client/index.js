import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Your App is impored here
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import Provider, wrap your add, 提供application
// all of your compoenents wirtten inside Prover can access global states or reducx store
import { Provider } from "react-redux";
// Import store, the global states
import { store } from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
