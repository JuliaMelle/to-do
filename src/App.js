import "./App.css";
import Input from "./components/input";
import Title from "./components/Title";
import Counter from "./components/Counter";
import List from "./components/List";
import { useState } from "react";
import Modal from "./Modal"; // Assuming you have a Modal component

function App() {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToCheck, setItemToCheck] = useState(null);

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
        <Input onAddItems={handleAddItems} />
        <List items={items} onCheck={handleChecked} onDelete={handleDelete} />
      </header>
    </div>
  );
}

export default App;
