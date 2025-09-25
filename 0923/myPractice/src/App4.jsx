import React from "react";
import styles from "./App4.module.css";
import Question from "./Components/Question";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  span {
  color: red;
  font-size: 12px;
  }
`;

const App4 = () => {
  return (
    <>
      <GlobalStyle />
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
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
