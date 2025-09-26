import React from "react";
import { useState, useRef } from "react";
function Modal() {
  const btnOpen = useRef(true);
  const [isOpen, setIsOpen] = useState(true);

  function setOpen() {
    setIsOpen(isOpen);
  }

  function setClose() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className="btn-open" ref={btnOpen} onClick={setOpen}>
        모달 열기
      </button>
      <dialog>
        <form method="dialog">
          <h2>모달입니다!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            quam molestiae nisi repellat aliquam exercitationem nihil sint ipsam
            autem rem eos. Laborum beatae enim optio amet atque sed? At, maxime.
          </p>
          <button onClick={setClose} ref={btnOpen}>
            닫기
          </button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
