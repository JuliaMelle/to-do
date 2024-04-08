import "../styles/list.css";
import Item from "./Item";
import React, { useState } from "react";
import { FaSortAlphaDown, FaSortNumericDown } from "react-icons/fa";

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function sortByQuantity(a, b) {
  return a.quantity - b.quantity;
}

function List({ items, onCheck, onDelete }) {
  const [sortMethod, setSortMethod] = useState("name");
  // Corrected variable name from itemList to items
  const sortedItemList = [...items].sort(
    sortMethod === "name" ? sortByName : sortByQuantity
  );

  return (
    <ul className="todoList">
      <button onClick={() => setSortMethod("name")} className="FaEdit">
        <FaSortAlphaDown />
      </button>
      <button onClick={() => setSortMethod("quantity")} className="FaEdit">
        <FaSortNumericDown />
      </button>

      {/* Removed the incorrect mapping over items and sortedItemList */}
      {sortedItemList.map((item) => (
        <Item
          key={item.id}
          itemList={item}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default List;
