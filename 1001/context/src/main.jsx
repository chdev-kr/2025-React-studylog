import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import App from "./UseLayoutEffect.jsx";
// import App from "./ShoppingMall";
// import App from "./LifeCycle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
