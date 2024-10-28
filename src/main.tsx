import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./global.css"
import React from "react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./components//CustomCSS/scrollbar.css"

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
