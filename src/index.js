import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeContract } from "./components/utils/near";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
window.nearInitPromise = initializeContract()
  .then(() => {
    root.render(<App />);
  })
  .catch(console.error);

reportWebVitals();


