import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import TripList from "./TripList.jsx";
import Fragment from "./Fragment.jsx";
import Component from "./Component.jsx";
import App from "./App2.jsx";
import Resume from "./Resume.jsx";
import Hello from "./component/Hello.jsx";
import UseState from "./UseState.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <React.Fragment> */}
    {/* <App /> */}
    {/* <TripList /> */}
    {/* <Fragment />
      <Component />
      <App2 /> */}
    {/* <Resume /> */}
    {/* <Hello /> */}
    <UseState />
    {/* </React.Fragment> */}
  </StrictMode>
);
