import React, { useState } from "react";
import "../styles/input.css";
import Counter from "./Counter";
function Input({ onAddItems }) {
  const [name, setName] = useState("gab");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with name:", name);
    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    console.log(newItem);

    // Using the name and quantity in the same component
    console.log(`Stored name: ${newItem.name}`);
    console.log(`Stored quantity: ${newItem.quantity}`);

    // Reset the form fields
    setName("");
    setQuantity(1);
    onAddItems(newItem);
  }

  return (
    <div className="input-group">
      <form onSubmit={handleSubmit}>
        {/* <Counter /> */}
        <div className="input-group">
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
              <option value={number} key={number}>
                {number}
              </option>
            ))}
          </select>
          <input
            placeholder="Enter new item here"
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-button" type="submit">
            <span>ADD</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
