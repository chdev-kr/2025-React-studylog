import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StyledProps from "./StyledProps.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StyledProps />
    <App />
  </StrictMode>
);
