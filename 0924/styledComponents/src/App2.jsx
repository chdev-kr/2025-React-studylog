import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <button onClick={handleOpenModal}> Open Modal</button>
      {isModalOpen && (
        <Modal
          title="My Modal"
          content="This is my modal"
          onClick={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
