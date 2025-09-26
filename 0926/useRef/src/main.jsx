import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./StopWatch2.jsx";
import Modal from "./Modal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Modal />
  </StrictMode>
);
