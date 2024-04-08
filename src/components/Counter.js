import "../styles/counter.css";
import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1); // Added quantity state

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  // Function to handle the change of the select element
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    // Optionally, update the value based on the selected quantity
    // setValue(e.target.value);
  };

  return (
    <div className="custom-select">
      <div className="number-left" onClick={decrement}>
        {/* No content needed here, the CSS will handle the "-" */}
      </div>
      <input
        type="text"
        className="number-quantity"
        value={value}
        readOnly // Make the input read-only to prevent manual editing
      />

      <select
        value={quantity}
        onChange={handleQuantityChange}
        className="select"
      >
        {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <div className="number-right" onClick={increment}>
        {/* No content needed here, the CSS will handle the "+" */}
      </div>
    </div>
  );
}

export default Counter;
