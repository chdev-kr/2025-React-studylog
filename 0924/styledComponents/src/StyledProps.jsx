import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${(props) => (props.size === "large" ? "18px" : "14px")};
  transition: all 0.3s ease;

  background-color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "red";
      case "success":
        return "green";
      default:
        return "gray";
    }
  }};

  &:hover {
    transform: ${(props) =>
      props.size === "large" ? "scale(1.5)" : "scale(1)"};
  }

  width: ${(props) => (props.$fullwidth ? "100%" : "auto")};
`;

export default function StyledProps() {
  return (
    <>
      <StyledButton color="danger" size="large" $fullWidth={true}>
        버튼1
      </StyledButton>
      <StyledButton color="success" $fullWidth={true}>
        버튼2
      </StyledButton>
      <StyledButton size="large">버튼3</StyledButton>
    </>
  );
}
