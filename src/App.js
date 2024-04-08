import "./App.css";
import Input from "./components/input";
import Title from "./components/Title";
import Counter from "./components/Counter";
import List from "./components/List";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToCheck, setItemToCheck] = useState(null);
  // Calculate completion percentage
  const completionPercentage =
    (items.filter((item) => item.isChecked).length / items.length) * 100;

  function handleAddItems(item) {
    setItems((Items) => [...Items, item]);
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id.id ? { ...item, isChecked: !item.isChecked } : item
      )
    );

    console.log(items);
    console.log(id);
  }
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div style={{ width: 100, height: 100, padding: 20 }}>
          <CircularProgressbar
            value={completionPercentage}
            text={`${completionPercentage.toFixed(2)}%`}
            styles={{
              // Customize the appearance of the progress bar here
              path: {
                stroke: `rgba(62, 152, 199, ${completionPercentage / 100})`,
                strokeLinecap: "butt",
              },
              trail: {
                stroke: "#d6d6d6",
              },
            }}
          />
        </div>
        <Input onAddItems={handleAddItems} />
        <List items={items} onCheck={handleChecked} onDelete={handleDelete} />
        {/* <div className="completion-percentage">
          Completion:{" "}
          {isNaN(completionPercentage) ? 0 : completionPercentage.toFixed(2)}%
        </div> */}
        {/* <div
          className="circularProgress"
          data-inner-circle-color="lightgrey"
          data-percentage={completionPercentage}
          data-progress-color="crimson"
          data-bg-color="black"
        >
          <div className="innerCircle"></div>
          <p className="percentage">
            {isNaN(completionPercentage) ? 0 : completionPercentage.toFixed(2)}%
          </p>
        </div> */}
      </header>
    </div>
  );
}

export default App;
