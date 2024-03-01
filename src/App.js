import { useState } from "react";

import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleRemoveItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure to delete all items ?");
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        handleClearList={handleClearList}
        handleRemoveItems={handleRemoveItems}
        handleToggleItems={handleToggleItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
