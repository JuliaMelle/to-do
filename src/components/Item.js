import "../styles/list.css";
import React, { useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function sortByQuantity(a, b) {
  return a.quantity - b.quantity;
}

function Item({ itemList, onCheck, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(itemList);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const saveChanges = () => {
    // Logic to save changes
    console.log("Saving changes:", currentItem);
    setEditing(false); // Exit edit
  };

  return (
    <div className="card">
      <div className="cardRow">
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
          {/* <button onClick={() => onCheck(currentItem)} className="FaEdit">
            <FaCheck />
          </button> */}
          <button onClick={() => onDelete(currentItem.id)} className="MdDelete">
            <MdDelete />
          </button>
          <button onClick={toggleEdit} className="FaEdit">
            <FaEdit />
          </button>
          {editing && (
            <button onClick={saveChanges} className="FaEdit">
              {" "}
              <FaCheck />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
