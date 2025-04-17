import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 👇 **this line is mandatory**
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
