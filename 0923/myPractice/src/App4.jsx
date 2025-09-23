import React from "react";
import "./App4.css";
import Question from "./Components/Question";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  span {
  color: red;
  font-size: 12px;
  }
`;

const App4 = () => {
  return (
    <>
      <GlobalStyle />
      <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
        <span>hello span</span>
      </nav>
      <Question />
    </>
  );
};

export default App4;
