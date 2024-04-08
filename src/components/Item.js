import React, { useState, useEffect } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiCheckboxIndeterminateFill } from "react-icons/ri";
import "../styles/list.css";

import DeleteConfirmModal from "./DeleteConfirmModal";

function Item({ itemList, onCheck, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(itemList);
  const [isCompleted, setIsCompleted] = useState(itemList.isCompleted || false); // Assuming itemList has an isCompleted property

  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    if (Array.isArray(itemList)) {
      const totalItems = itemList.length;
      const completedItems = itemList.filter((item) => item.isCompleted).length;
      const percentage = (completedItems / totalItems) * 100;
      setCompletionPercentage(percentage);
    } else {
      console.error("itemList is not an array");
      setCompletionPercentage(0);
    }
  }, [itemList]); // Dependency array now includes itemList

  // const toggleCompletion = () => {
  //   setIsCompleted(!isCompleted);

  //   setCurrentItem({ ...currentItem, isCompleted: !isCompleted });
  // };
  const toggleCompletion = () => {
    // Toggle the completion status of the current item
    setIsCompleted(!isCompleted);

    const updatedItem = { ...currentItem, isChecked: !currentItem.isChecked };
    setCurrentItem(updatedItem);
    onCheck(updatedItem); // Notify the parent component of the change
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const saveChanges = () => {
    // Logic to save changes
    console.log("Saving changes:", currentItem);
    setEditing(false); // Exit edit
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(id);
    }
  };

  // const toggleCompletion = () => {
  //   setIsCompleted(!isCompleted);
  //   // Logic to update the item's completion status in your data source
  // };

  return (
    <div className="card">
      <div className="cardRow pad">
        <h3 className="text">
          {editing ? (
            <input
              type="text"
              className="input"
              value={currentItem.name}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, name: e.target.value })
              }
            />
          ) : (
            `${currentItem.quantity} ${currentItem.name}`
          )}
        </h3>
        <div className="cardSE">
          {isCompleted ? (
            <button onClick={toggleCompletion} className="completed FaEdit">
              <RiCheckboxIndeterminateFill />
            </button>
          ) : (
            <button onClick={toggleCompletion} className="notCompleted FaEdit">
              <FaCheck />
            </button>
          )}
          <button
            onClick={() => handleDelete(currentItem.id)}
            className="MdDelete"
          >
            <MdDelete />
          </button>
          <button onClick={toggleEdit} className="FaEdit">
            <FaEdit />
          </button>
          {editing && (
            <button onClick={saveChanges} className="FaEdit green">
              <FaCheck />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Item;
