import { useState } from "react";
import "./App.css";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addElement = () => {
    if (input !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <h2>Item List</h2>
      <AddItemForm input={input} setInput={setInput} addElement={addElement} />
      <ItemList items={items} handleDelete={handleDelete} />
    </>
  );
}

export default App;
