// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, item, onSave }) => {
  if (!isOpen) return null;

  const handleSave = () => {
    onSave(item);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: 150,
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Item</h2>
        <input
          type="text"
          value={item?.title}
          onChange={(e) => onSave({ ...item, title: e.target.value })}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
