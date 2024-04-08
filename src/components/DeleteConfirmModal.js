import React from "react";
import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const DeleteConfirmModal = ({ show, handleClose, handleDelete, itemId }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(itemId)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmModal;
