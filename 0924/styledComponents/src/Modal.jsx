import React from "react";

function Button(props) {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
}

function Modal(props) {
  const { title, content, onClick } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button text="Close" onClick={onClick} />
    </div>
  );
}

export default Modal;
