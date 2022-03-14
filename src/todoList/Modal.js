import React, { useEffect } from "react";

const Modal = ({ modalDescription, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <div className="modal">
      <p>{modalDescription}</p>
    </div>
  );
};

export default Modal;
