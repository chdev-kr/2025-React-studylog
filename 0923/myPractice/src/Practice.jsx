import React from "react";
import styled, { css } from "styled-components";

const One = styled.button`
  color: red;
  font-size: 30px;
  font-weight: bold;
  width: 150px;
  height: 150px;
`;

const Two = styled(One)`
  border: 3px solid black;
  border-radius: 10px;
  background-color: blue;
`;

const Three = styled(One)`
  background-color: skyblue;
  color: green;
`;

const Practice = () => {
  return (
    <>
      <One> 버튼 1</One>
      <Two> 버튼 2</Two>
      <Three> 버튼 3</Three>
    </>
  );
};

export default Practice;
