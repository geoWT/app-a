import React from "react";
import Modal from "react-modal";

export const CustomPopUp = ({ onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>Please provide a comment</h2>
      <p>Explain why the experience was poor.</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};