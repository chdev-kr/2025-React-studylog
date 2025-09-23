import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import App from "./App0.jsx";
import Practice from "./Practice.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practice /> */}
  </StrictMode>
);
